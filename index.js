const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.login("NzUwMTkzMjIxNzQ5MTc4NDk4.X0294Q.Xb8Qht7bFWcJmWL_IBaQfY0JmCI")
