exports.run = (client, msg  , args) => {

  const afk = msg.guild.afkChannelID ? msg.guild.afkChannelID : "None";
  





msg.channel.send({embed: {
image: {url: `${msg.guild.iconURL}`},
color: msg.member.displayColor,
description:`**Server Info:**
Server Name: **${msg.guild.name}**
Region: **${msg.guild.region}**
Verification Level: **${msg.guild.verificationLevel}**
Default Channel: ${msg.guild.defaultChannel}
AFK Channel: <#${afk}> **(${afk})**
Owner: ${msg.guild.owner} (**${msg.guild.owner.id}**)
Server ID: **${msg.guild.id}**
Afk Timeout Time: **${msg.guild.afkTimeout / 60} Min**

**Micellaneous:**
Emote Count: **${msg.guild.emojis.size}**
Member Count: **${msg.guild.memberCount}**
Created: **${msg.guild.createdAt.toString().substr(0, 15)}**
Channel Count: **${msg.guild.channels.filter(m => m.type === 'text').size + msg.guild.channels.filter(m => m.type === 'voice').size}**
Role Count: **${msg.guild.roles.size}**
Large Guild? **${msg.guild.large}**`}})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'sinfo',
  description: `Server Info`,
  usage: 'sinfo'
};
  
