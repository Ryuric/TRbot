const Telegraf = require('telegraf');

const bot = new Telegraf('1078085914:AAGFxFzM1bbI5ffB5dYSHDknl9bnUiOA-vU');

bot.start((ctx) => {
    //console.log(ctx.from);
    //console.log(ctx.chat);
    //console.log(ctx.message);
    //console.log(ctx.updateSubTypes);
    ctx.reply('Saludos ' + ctx.from.first_name + ' ' + ctx.from.last_name);
    //ctx.reply(`Bienvenido ${ctx.from.first_name}. Has enviado un ${ctx.updateSubTypes[0]}`);
    //bot.telegram.sendMessage(ctx.chat.id, `bienvenido ${ctx.from.first_name}. Has enviado un ${ctx.updateSubTypes[0]}`);
});

bot.command(['dinosaurio', 'Dinosaurio', 'DINOSAURIO', 'DinoSaurio'], (ctx) => {
    ctx.reply('Reptil Terrible');
});

bot.hears('lagarto', ctx => {
    ctx.reply('One Million Lizard!');
});

bot.hears('chinchorro', ctx => {
    ctx.reply('chinchorro el bombero particular');
});

bot.on('text', ctx => {
    ctx.reply('wiri wiri ...xd');
});

bot.on('sticker', ctx => {
    ctx.reply('jajaj');
    ctx.reply('nice!');
});

bot.mention('BotFather', (ctx) => {
    ctx.reply('Nombraste a mi padre');
});

bot.phone('+9 23244342', ctx => {
    ctx.reply('9 23244342 es la combinación');
});

bot.hashtag('codeando', ctx => {
    ctx.reply('manos a la obra!');
});

bot.launch();