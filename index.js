const {app} = require("./server.js")
const {bot, secretPath} = require("./bot.js")

const {PORT} = process.env

app.use(bot.webhookCallback(secretPath))

app.listen(PORT, () => {
  console.log("server started")
})