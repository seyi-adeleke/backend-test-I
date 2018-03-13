require('dotenv').config();

const Twitter  = require('twitter');
const config = require('./config');
const twitClient  = new Twitter(config.twitter);
const google = require('./google');

module.exports =  {
    searchTweets: (searchParameter) => {
        const stream = twitClient.stream('statuses/filter', {track: searchParameter});
        stream.on('data', (event) => {
            const Tweeple = {
                name: event.user.screen_name,
                bio: event.user.description,
                followers: event.user.followers_count,
            };
            google.sendToSpreadSheet(Tweeple);
        });
        stream.on('error', (error) => {
            throw error;
        });
    }
};


