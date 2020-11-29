require('dotenv').config();

const { BOT_TOKEN } = process.env;
const Telegraf = require('telegraf');
const session = require('telegraf/session');
const Stage = require('telegraf/stage');
const Scene = require('telegraf/scenes/base');


//<-----Commands----->
const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');

//<-----Scenes----->
const fromScene = require('./scenes/from');
const toScene = require('./scenes/to');

const init = async(bot, config) => {

    //<-----Stage, Scenes-----
    const stage = new Stage([fromScene, toScene ]);
    //<-----Middleware-----
    bot.use(session());
    bot.use(stage.middleware());
    //<-----Commands----->
    bot.start(startCommand());
    bot.help(helpCommand());
    bot.command('from', ctx => ctx.scene.enter('from'));
    bot.command('to', ctx => ctx.scene.enter('to'));
    return bot;
};

init(new Telegraf(BOT_TOKEN), process.env).then(async(bot)=> {
    await bot.launch();
    console.log(`Launched ${new Date()}`);
});

module.exports = init;