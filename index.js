const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.login("NzQ5NDY5NDk3MjQ0NjQ3NDg2.X0sb3A.vihMUDVEDKjxdiRo7Zb6ea_awvo")




client.on("guildMemberAdd", member => {
  member.send("I AM CHEESE. CHEESE IS ME.")
  member.send("CHEESE")
})
client.on("message", msg => {
	
  })

client.on("message", msg => {
if (msg.content.startsWith("cheese")) {
    msg.member.edit({
      nick: 'Cheeser',
    })
      .then(console.log)
      .catch(console.error);
} })

client.on("message", message => {
  if (message.content.startsWith("!cheese")) {
    const member = message.mentions.members.first()
    if (!member) {
      return message.reply(
        `No user to cheese ${message.author.username}.`
      )
    }
     message.reply(`${member.user.tag} was cheesed.`)
     member.send(`cheese`)
  }
})

  client.on("message", msg => {
	if (msg.content === "cheese") {msg.reply("Cheese.")}
                if (msg.content === "sanic") {
    msg.reply("https://www.youtube.com/watch?v=PX7zPlQjAr8")
	}
	if (msg.content === "tongo") {
    msg.reply("https://www.youtube.com/watch?v=WtO3AHMBePY")
	}
	if (msg.content === "cockroach") {
    msg.reply("https://www.youtube.com/watch?v=HxkmXnRQblE")
	}
	if (msg.content === "roll") {
    msg.reply("https://www.youtube.com/watch?v=ub82Xb1C8os")
	}
	if (msg.content === "sans") {
    msg.reply("https://www.youtube.com/watch?v=wDgQdr8ZkTw")
	}
	if (msg.content === "gnome") {
    msg.reply("https://www.youtube.com/watch?v=6n3pFFPSlW4")
	}
	if (msg.content === "the lorde") {
    msg.reply("https://www.youtube.com/watch?v=7KiIWC14vu0")
	}
	if (msg.content === "raid") {
    msg.reply("https://www.youtube.com/watch?v=rFyh0UdUmDc")
	}
	if (msg.content === "mom") {
    msg.reply("https://www.youtube.com/watch?v=6Joyj0dmkug&list=PLSGX_j5InECjEzBxQVcatlJBKtqeUphcq")
	}
	if (msg.content === "corn") {
    msg.reply("https://www.youtube.com/watch?v=j8qp3ITVqY0")
	}
	if (msg.content === "CAPITALIST BASTARDS") {
   msg.reply("https://www.youtube.com/watch?v=U06jlgpMtQs")
	}
	if (msg.content === "adidas") {
   msg.reply("https://www.youtube.com/watch?v=QiFBgtgUtfw")
	}
	if (msg.content === "pavloski") {
   msg.reply("https://www.youtube.com/watch?v=QiFBgtgUtfw")
	}
	if (msg.content === "country roads") {
   msg.reply("https://www.youtube.com/watch?v=FRPeYP6gS-s")
	}
	if (msg.content === "roads 2") {
   msg.reply("https://www.youtube.com/watch?v=0XQlUAw87HY")
	}
	if (msg.content === "some") {
   msg.reply("BODY ONCE TOLD ME https://www.youtube.com/watch?v=irY9uIG5NJ8")
	}
	if (msg.content === "exercise") {
   msg.reply("https://www.youtube.com/watch?v=JzGTxHrFG84&list=PLNmj-6z3_4OJjVW7pdSsGbvMqYeGE2aD6&index=3")
	}
	if (msg.content === "christian server") {
   msg.reply("https://www.youtube.com/watch?v=iZmqhQ8myGY")
	}
	if (msg.content === "sandstorm") {
   msg.reply("https://www.youtube.com/watch?v=y6120QOlsfU")
	}
	if (msg.content === "christian spongebob") {
   msg.reply("https://www.youtube.com/watch?v=NgexfOieCzg")
	}
	if (msg.content === "roads 3") {
   msg.reply("https://www.youtube.com/watch?v=7TiN2X2MmBY") }
  })
