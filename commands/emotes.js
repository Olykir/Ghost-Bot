exports.run = function(bot, message, args) {

if(message.guild.emojis.size < 1) return message.channel.send(":x: || \`It seems this server has no custom emojis\`")

message.channel.send({embed: {
    color: `${message.member.displayColor}`,
    author: {
      name: message.guild.name,
      icon_url: message.guild.iconURL
    },
    title: `${message.guild.name} Emotes:`,
    "description": `${message.guild.emojis.map(e => `<:${e.name}:${e.id}>`).join(" ")}\nCount: **${message.guild.emojis.size}**`,

 thumbnail: { url: message.guild.iconURL},
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: `Server Emotes`,
}
            }
        });
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'emotes',
  description: 'See server emotes',
  usage: 'emotes'
};
