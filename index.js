const { Telegraf, Markup } = require("telegraf")
require("dotenv").config()
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Вас приветствует Робот помошник!!!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('Like'))
bot.hears('Привет', (ctx) => ctx.reply('Приветик мой родной'))
bot.hears('ты откуда?', (ctx) => ctx.reply('Я из хостинга heroku'))
bot.hears('Как дела?', (ctx) => ctx.reply('Отлично'))
bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

// process.env.BOT_TOKEN