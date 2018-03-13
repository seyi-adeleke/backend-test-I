const program = require("commander");
const twitClient = require('./twitter');


const getTweets = (searchParameter) => {
    twitClient.searchTweets(searchParameter);
};

program
    .version('0.0.1')
    .description('A twitter search bot');


program
    .command('searchTweets <searchParameter>')
    .alias('s')
    .description('Search Tweets')
    .action((searchParameter) => {
        getTweets(searchParameter)
});

program.parse(process.argv);
