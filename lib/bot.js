//var Bot = require('slackbots');

// create a bot
//var settings = {
//    token: process.env.BOT_API_KEY, //'xoxb-108661910454-0kv41kjsQ1uiajWODb8NSxa7',
//    name: 'botty-one'
//};
//var bot = new Bot(settings);

//bot.on('start', function() {
//    bot.postMessageToChannel('general', 'Hello channel!');
//    bot.postMessageToUser('moadh', 'hello bro!');
//    bot.postMessageToChannel('random', 'hello group chat!');
//});


var requestify = require("requestify");
var cron = require("cron");
var Quote = require("./Quote");

// Create an incoming webhook
var slack = require('slack-notify')(process.env.SLACKHOOK || 'https://hooks.slack.com/services/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');

// Load configuration.
var DEFAULT_ICON_URL = 'https://pbs.twimg.com/profile_images/1784226690/icon_bigger.png';
var botName = process.env.BOTNAME || 'botty-one';
var iconUrl = (process.env.ICON_URL || DEFAULT_ICON_URL);
var channelName = '#' + (process.env.CHANNEL || 'random');


/**
 * Wraps text in a slack-formatted link.
 */
var slackLink = function (text, url) {
    return '<' + url + '|' + text + '>';
};

/**
 * Sends a message to slack.
 */
var announce = function (text) {
    console.log(text);
    slack.send({
        channel: channelName,
        text: text,
        username: botName,
        icon_url: iconUrl,
    });
};

/**
 * Sends a quote message.
 */
var sendQuote = function (quote) {
    var author = quote.author + ' : \n' ;
    var text = author + quote.content;
    announce(text);
};

var CronJob = cron.CronJob;
var job = new CronJob({
  cronTime: '* * * * * *',
  onTick: function() {
    /*
     * Runs everyday 
     * at 11:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
     console.log('starting cron');
      // Get Match list
      /*requestify.get('http://quotes.rest/qod.json?category=inspire').then( function(response) {
            var quotes = response.getBody().contents.quotes;
            console.log('getting a quote');

            quote = new Quote();
            quote.update(quotes[0]);
          });*/
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});

console.log('outer starting cron');
job.start();

/*
var cronJob = cron.job("* * * * * *", function(){

	console.log('starting cron');
      // Get Match list
      requestify.get('http://quotes.rest/qod.json?category=inspire').then( function(response) {
            var quotes = response.getBody().contents.quotes;
            console.log('getting a quote');

            quote = new Quote();
            quote.update(quotes[0]);
          });
    

});

console.log('outer starting cron');
cronJob.start();*/