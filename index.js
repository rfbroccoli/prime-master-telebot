const {app} = require("./server.js")
const {bot, secretPath} = require("./bot.js")

const {PORT} = process.env

bot.telegram.setWebhook(`${WEBHOOK_URL}${secretPath}`);

app.use(bot.webhookCallback(secretPath))

app.listen(PORT, () => {
  console.log("server started")
})