module.exports = () => async ctx => {
    ctx.replyWithHTML('/from - set language\n/to - set translate language\n' +
    'Also you can use this bot in inline-mode\n\n' +
    'This bot uses <b>ISO-639-1 standart</b>.\nCheck list here: ' +
    'https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\n' +
    'For example:\n<b>en</b> - English, <b>es</b> - Spanish, <b>ru</b> - Russian');
};