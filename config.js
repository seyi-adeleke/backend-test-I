const config = {
    twitter: {
        "consumer_key": process.env.consumerKey,
        "consumer_secret": process.env.consumerSecret,
        "access_token_key": process.env.accessToken,
        "access_token_secret": process.env.accessTokenSecret,
    },
    google: {
        "client_email": process.env.client_email,
        "private_key": process.env.private_key,
        "spreadsheet_id":process.env.spreadsheet_id,
    }
};

module.exports = config;

