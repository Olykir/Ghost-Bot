

exports.run = async (client, message, args) => {

message.channel.send({embed: {color: message.member.displayColor,title: `Invite Me Here!`, description: `[Invite](https://discordapp.com/oauth2/authorize?client_id=328444906936860675&scope=bot&permissions=2146958591)`}})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Invite the bot to your server',
  usage: 'invite'
};
