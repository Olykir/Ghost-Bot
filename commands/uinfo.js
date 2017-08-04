const Discord = require('discord.js');
const moment = require('moment')
exports.run = function(client, message, args) {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
     if(!member) return message.reply(`Please Mention Someone First`)
    const user = member.user;
    const game = user.presence.game ? user.presence.game.name : "None";
    const nickname = member.nickname || "None";
    const isBot = user.bot ? "Yes" : "No";



  
  
message.channel.send({embed: {color: member.displayColor,title: "User Info", description: `Tag: **${user.tag}**\nNickname: **${nickname}**\nUser ID: **${user.id}**\nStatus: **${user.presence.status}**\nCreated At: **${user.createdAt.toString().substr(0, 15)}**\nJoined At: **${member.joinedAt.toString().substr(0, 15)}**\nCurrent Game: **${game}**\nRoles: ${member.roles.sort((a, b) => b.position - a.position).map(r => r.toString()).join(", ")}`}})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'uinfo',
  description: 'User Info.',
  usage: 'uinfo [user]'
};
