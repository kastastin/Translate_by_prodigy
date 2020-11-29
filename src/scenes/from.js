const Scene = require('telegraf/scenes/base');

const from = new Scene('from');
from.enter(ctx => {
    ctx.reply('Please send a code of from language');
});

from.on('text', ctx => {
    if(ctx.message.text.length != 2) {
        return ctx.reply('Language must be a 2 chars');
    }
    ctx.session.from = ctx.message.text.toLowerCase();
    return ctx.scene.leave();
});

from.leave(ctx => {
    ctx.replyWithHTML(`<b>'${ctx.message.text}'</b> set as a language`);
});

from.on('message', ctx => ctx.reply('You should enter only text message please'));

module.exports = from;