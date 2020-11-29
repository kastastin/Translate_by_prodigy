require('dotenv').config();

const { BOT_TOKEN } = process.env;

const Telegraf = require('telegraf');

const init = async(bot, config) => {
    bot.start(ctx => ctx.reply('Hi'));
    return bot;
};

init(new Telegraf(BOT_TOKEN), process.env).then(async(bot)=> {
    await bot.launch();
    console.log(`Launched ${new Date()}`);
});

module.exports = init;