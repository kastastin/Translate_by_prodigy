module.exports = () => async ctx => {
    ctx.replyWithHTML(`Hello, <b>${ctx.message.chat.first_name}</b>` +
    `\nPlease set /from language and /to language.` +
    `\nThe default /to language is <b>'en'</b>`);
};