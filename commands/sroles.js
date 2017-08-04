exports.run = (client, message  , args) => {

message.channel.send({embed: {
    color: `${message.member.displayColor}`,
    author: {
      name: message.guild.name,
      icon_url: message.guild.iconURL
    },
    title: `${message.guild.name} Roles:`,
    "description": `Role Count: **${message.guild.roles.size}**
${message.guild.roles.sort((a, b) => b.position - a.position).map(r => r.toString()).join(", ")}`,
 thumbnail: { url: message.guild.iconURL.replace("jpg", "png?size=2048") },
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: `Roles`,
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
  name: 'sroles',
  description: `Server roles.`,
  usage: 'sroles'
};
  
