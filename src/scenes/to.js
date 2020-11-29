const Scene = require('telegraf/scenes/base');

const to = new Scene('to');
to.enter(ctx => {
    ctx.reply('Please send a code of from language');
});

to.on('text', ctx => {
    if(ctx.message.text.length != 2) {
        return ctx.reply('Language must be a 2 chars');
    }
    ctx.session.to = ctx.message.text.toLowerCase();
    return ctx.scene.leave();
});

to.leave(ctx => {
    ctx.replyWithHTML(`<b>'${ctx.message.text}'</b> set as a language`);
});

to.on('message', ctx => ctx.reply('You should enter only text message please'));

module.exports = to;