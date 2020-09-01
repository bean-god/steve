﻿const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.login("NzUwMTkzMjIxNzQ5MTc4NDk4.X0294Q.Xb8Qht7bFWcJmWL_IBaQfY0JmCI")

/*client.on("message", msg => {
	
  })
client.on("message", msg => {
if (msg.content === "spoon") {msg.delete()
msg.reply(`spoon`)
.catch(console.error);} else {
if (msg.content.startsWith("spoon")) {msg.delete()
msg.reply(`spoon`)
.catch(console.error);}
}
}) */
client.on("message", msg => {
	if (msg.content.includes("when is the stream")) {msg.reply(`We are unable to reach Customer Services right now. Please try again later.`)}
    if (msg.content.includes("when's the stream")) {msg.reply(`We are unable to reach Customer Services right now. Please try again later.`)}
    if (msg.content.includes("When is the stream")) {msg.reply(`We are unable to reach Customer Services right now. Please try again later.`)}
    if (msg.content.includes("When's the stream")) {msg.reply(`We are unable to reach Customer Services right now. Please try again later.`)}
    if (msg.content.startsWith("Hello")) {msg.reply(`How may I help you today?`)}
    if (msg.content.startsWith("Steve")) {msg.reply(`How may I help you today?`)}
  })
  client.on("message", msg => {
  var x = Math.floor(Math.random() * 100)+1;  
  if(x == 5) {
  msg.reply(`Believe in yourself. Under-confidence leads to a self-fulfilling prophecy that you are not good enough for your work.`)
  }
  if(x == 14) {
  msg.reply(`A better understanding of usage can aid in prioritizing future efforts we're ahead of the curve on that one five-year strategic plan, sorry i was triple muted.`)
  }
  if(x == 38) {
  msg.reply(`Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water.`)
  }
  if(x == 41) {
  msg.reply(`Jazz it up a little could you rotate the picture to show the other side of the room?`)
  }
  if(x == 31) {
  msg.reply(`Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.`)
  }
  if(x == 16) {
  msg.reply(`We have to leverage up the messaging. Deliverables future-proof, so performance review. Bob called an all-hands this afternoon highlights .`)
  }
  if(x == 6) {
  msg.reply(`Do not let your negative thoughts have power over you because those thoughts will end up controlling your life. No one can live a positive life with a negative mind.`)
  }
  if(x == 42) {
  msg.reply(`What does this mean?`)
  }
  if(x == 32) {
  msg.reply(`I hope the council doesn't hear of this.`)
  }
  })
  client.on("message", msg => { 
   var y = Math.floor(Math.random() * 4)+1;
  if (msg.content.startsWith("yes or no")) {
    if (y >= 3) {msg.reply(`yes`)}else {msg.reply(`no`)}
  }})