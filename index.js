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
 })
client.on("message", msg => {
  if (msg.content.includes("where is Bob")) {msg.delete(); msg.reply(`You do not need to know.`)}
  if (msg.content.includes("where is bob")) {msg.delete(); msg.reply(`You do not need to know.`)}
  if (msg.content.includes("Where is Bob")) {msg.delete(); msg.reply(`You do not need to know.`)}
  if (msg.content.includes("Where is bob")) {msg.delete(); msg.reply(`You do not need to know.`)}
})
client.on("message", msg => {
  if (msg.content.includes("where is Jake")) {
  msg.reply(`You do not need to know.`)
  msg.delete()
  .catch(console.error);}
  if (msg.content.includes("where is jake")) {
  msg.reply(`You do not need to know.`)
  msg.delete()
  .catch(console.error);}
  if (msg.content.includes("Where is Jake")) {
  msg.reply(`You do not need to know.`)
  msg.delete()
  .catch(console.error);}
  if (msg.content.includes("Where is jake")) {
  msg.reply(`You do not need to know.`)
  msg.delete()
  .catch(console.error);}
})
  client.on("message", msg => { 
  var z = Math.floor(Math.random() * 5)+1;
  if (msg.content.includes("steve")) {
  if(z == 1) {msg.reply(`Welcome to Customer Service. My name is Steve. How can I help you?`)}
  if(z == 2) {msg.reply(`Good afternoon. You’re speaking to Steve. How may I help you?`)}
  if(z == 3) {msg.reply(`Hi! You’re through to Steve, how can I help you?`)}
  if(z == 4) {msg.reply(`Hi! Steve speaking, how may I help you today?`)}
  if(z == 5) {msg.reply(`Steve speaking, what seems to be the issue?`)}
  }
  })
  client.on("message", msg => {
  var x = Math.floor(Math.random() * 150)+1;  
  if(x == 102) {
  msg.reply(`Believe in yourself. Under-confidence leads to a self-fulfilling prophecy that you are not good enough for your work.`)
  } else
  if(x == 14) {
  msg.reply(`A better understanding of usage can aid in prioritizing future efforts we're ahead of the curve on that one five-year strategic plan, sorry i was triple muted.`)
  } else
  if(x == 38) {
  msg.reply(`Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water.`)
  } else
  if(x == 41) {
  msg.reply(`Learn to accept everything about yourself, even the part of yourself that struggles to accept everything about yourself`)
  } else
  if(x == 61) {
  msg.reply(`Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.`)
  } else
  if(x == 16) {
  msg.reply(`Never lose hope. Storms make people stronger and never last forever.`)
  } else
  if(x == 6) {
  msg.reply(`Do not let your negative thoughts have power over you because those thoughts will end up controlling your life. No one can live a positive life with a negative mind.`)
  } else
  if(x == 92) {
  msg.reply(`What does this mean?`)
  } else
  if(x == 32) {
  msg.reply(`I hope the council doesn't hear of this.`)
  }
  })
  client.on("message", msg => { 
   var y = Math.floor(Math.random() * 2);
  if (msg.content.includes("yes or no")) {
    if (y == 1) {msg.reply(`yes`)}else {msg.reply(`no`)}
  }})





















































  client.on("guildMemberAdd", member => {
  var x = Math.floor(Math.random() * 8)+1;  
  if(x == 1) {
  member.send(`Believe in yourself. Under-confidence leads to a self-fulfilling prophecy that you are not good enough for your work.`)
  } else
  if(x == 2) {
  member.send(`A better understanding of usage can aid in prioritizing future efforts we're ahead of the curve on that one five-year strategic plan, sorry i was triple muted.`)
  } else
  if(x == 3) {
  member.send(`Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water.`)
  } else
  if(x == 4) {
  member.send(`Learn to accept everything about yourself, even the part of yourself that struggles to accept everything about yourself`)
  } else
  if(x == 5) {
  member.send(`Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.`)
  } else
  if(x == 6) {
  member.send(`Never lose hope. Storms make people stronger and never last forever.`)
  } else
  if(x == 7) {
  member.send(`Do not let your negative thoughts have power over you because those thoughts will end up controlling your life. No one can live a positive life with a negative mind.`)
  } else
  if(x == 8) {
  member.send(`I hope the council doesn't hear of this.`)
  }
  })