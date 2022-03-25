const express = require("express")

const app = express()



app.get("/", (req, res) => {
  res.send("hello world")
})

app.get("/:name", (req, res) => {
  const {name} = req.params
  res.send(`hello ${name}`)
})

module.exports = {
  app
}

