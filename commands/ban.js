const Discord = require(`discord.js`)
exports.run = async (client, message, args) => {
let reason = args[1]
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: || \`It seems you do not have permission\`")
let user = message.mentions.users.first();
if(!user) return message.channel.send(":x: || \`Please mention someone\`")

if (!message.guild.member(user).bannable) return message.channel.send(":x: || \`It seems i do not have the perms to ban that user\`")

      const embed = new Discord.RichEmbed()
    .setColor(message.member.displayColor)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  message.channel.sendEmbed(embed)

message.guild.member(user).ban(`User banned By Ghost Bot`);

 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'ban a user',
  usage: 'ban [user]'
};
