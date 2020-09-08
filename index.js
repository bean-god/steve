const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require("fs")
fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})
client.login("NzUwMTkzMjIxNzQ5MTc4NDk4.X0294Q.Xb8Qht7bFWcJmWL_IBaQfY0JmCI")

















































