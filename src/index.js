require('dotenv').config();

const { BOT_TOKEN } = process.env;
const { Telegraf, Markup } = require('telegraf');

//<-----Commands----->
const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');

const init = async(bot, config) => {
    //<-----Commands----->
    bot.start(startCommand());
    bot.help(helpCommand());
    return bot;
};

init(new Telegraf(BOT_TOKEN), process.env).then(async(bot)=> {
    await bot.launch();
    console.log(`Launched ${new Date()}`);
});

module.exports = init;