var Bot = require('slackbots');

// create a bot
var settings = {
    token: 'xoxb-108661910454-0kv41kjsQ1uiajWODb8NSxa7',
    name: 'botty-one'
};
var bot = new Bot(settings);

bot.on('start', function() {
    bot.postMessageToChannel('general', 'Hello channel!');
    bot.postMessageToUser('moadh', 'hello bro!');
    bot.postMessageToChannel('random', 'hello group chat!');
});