const { Telegraf } = require('telegraf')
const {isPrime} = require("./controller.js")

const {BOT_TOKEN, WEBHOOK_URL} = process.env

if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(BOT_TOKEN)
// Set the bot response
bot.on('text', (ctx) => {
  const { text, chat } = ctx.message
    const num = parseInt(text)

    if (Number.isNaN(num)) {
        ctx.reply(`send me a number, you idiot`)
        return
    }

    if (isPrime(num)) {
        ctx.reply(`${text} is a prime number`)
    } else {
        ctx.reply(`${text} is not a prime number`)
    }
})

const secretPath = `/telegraf/${bot.secretPathComponent()}`

// Set telegram webhook
// npm install -g localtunnel && lt --port 3000
bot.telegram.setWebhook(`${WEBHOOK_URL}${secretPath}`)


module.exports = {bot, secretPath}
