 const Discord = require(`discord.js`)
exports.run = async (client, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(":x: || \`It seems you do not have permission\`")




let reason = args[1]
let user = message.mentions.users.first();
if(!user) return message.reply(`:x: || \`Please Mention A User\``)

if (!message.guild.member(user).kickable) return message.reply(':x: || \`I cannot kick that member\`');

  
  const embed = new Discord.RichEmbed()
    .setColor(message.member.displayColor)
    .setTimestamp()
    .setDescription(`**Action:** Kick\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason ? reason : "None"}`);
  message.channel.sendEmbed(embed)



message.guild.member(user).kick(`User Kicked By Ghost Bot`);

 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'kick a user',
  usage: 'kick [user]'
};
