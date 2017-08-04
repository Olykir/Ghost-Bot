exports.run = (client, message, args) => {



  var str = `${args.join(" ")}`
    if(!str) return message.reply(`Please provide some text`)
  var s =
    str.toLowerCase().split("")
  var newStr = ""
  for (i = 0; i < s.length; i++) {
    if (Math.floor((Math.random() * 100) + 1) >= 50) {
      let upperStr =
        s[i].toUpperCase()
      newStr += upperStr
    } else {
      newStr += s[i]

    }
  }


  message.channel.send({
    embed: {
      color: message.member.displayColor,
      description: `**${newStr}**`,
      
      image: {
        url: "https://images-ext-2.discordapp.net/external/RUoPiekUBqm8Y0s0uRsjIXJl0MTdLle-6srhEm2D20Y/http/i.imgur.com/cQ5HoTg.jpg"
      }
    }
  })



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'taunt',
  description: 'taunt someone',
  usage: 'taunt'
};
