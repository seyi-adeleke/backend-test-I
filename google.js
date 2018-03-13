const GoogleSpreadsheet = require('google-spreadsheet');
const async = require('async');
const config = require('./config');

const doc = new GoogleSpreadsheet(config.google.spreadsheet_id);
let sheet;

module.exports = {
    sendToSpreadSheet: (data) => {
        async.series([
            function setAuth(step) {
                let creds_json = {
                    client_email: config.google.client_email,
                    private_key: config.google.private_key,
                };
                doc.useServiceAccountAuth(creds_json, step);
            },
            function getInfoAndWorksheets(step) {
                doc.getInfo((err, info) => {
                    sheet = info.worksheets[0];
                    step();
                });
            },
            function AddRow(step) {
                sheet.addRow(data, (err, data) => {
                    console.log('added');
                });
                step();
            }
        ], (err) => {
            if( err ) {
                console.log('Error: '+err);
            }
        });
    }
};

