const { Telegraf } = require("telegraf");
const { textHandler } = require("./controller.js");

const { BOT_TOKEN, WEBHOOK_URL } = process.env;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN must be provided!");
}

const bot = new Telegraf(BOT_TOKEN);
// Set the bot response
bot.on("text", textHandler);

const secretPath = `/telegraf/${bot.secretPathComponent()}`;

// Set telegram webhook
// npm install -g localtunnel && lt --port 3000

module.exports = { bot, secretPath };
