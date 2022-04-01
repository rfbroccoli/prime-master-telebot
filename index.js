const { app } = require("./server.js")
const { Telegraf } = require("telegraf");
const { textHandler } = require("./controller.js");

const { PORT, BOT_TOKEN, WEBHOOK_URL } = process.env;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN must be provided!");
}

const bot = new Telegraf(BOT_TOKEN);
// Set the bot response
bot.on("text", textHandler);

const secretPath = `/telegraf/${bot.secretPathComponent()}`;

bot.telegram.setWebhook(`${WEBHOOK_URL}${secretPath}`);

app.use(bot.webhookCallback(secretPath))

app.listen(PORT, () => {
  console.log("server started")
})