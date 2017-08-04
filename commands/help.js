const settings = require('../joycon.json');
const Discord = require('discord.js');
exports.run = (client, message, params) => {

  function getPermLevel(messageAuthor) {
    if (message.channel.type === 'text') {
      let permlvl = 0;
      if (message.guild.member(messageAuthor).roles.has(settings.mod_id)) permlvl = 2;
      if (message.guild.member(messageAuthor).roles.has(settings.admin_id)) permlvl = 3;
      if (messageAuthor.id === settings.ownerid) permlvl = 4;
      return permlvl;
    } else {
      let permlvl = 0;
      if (messageAuthor.id === settings.ownerid) permlvl = 4;
      return permlvl;
    }
  }
  if (!params[0]) {
    var availibleCommands = client.commands.filter(c => c.conf.permLevel <= getPermLevel(message.author));
    const helpEmbed = new Discord.RichEmbed()
    .setAuthor('Help', client.user.avatarURL)
    .setColor(message.member.displayColor)
    .setDescription('Commands List')
    .addField('Command',availibleCommands.map(c => settings.prefix + c.help.name),true)
    .addField('Description',availibleCommands.map(c => c.help.description), true);
    message.channel.send({embed: helpEmbed});
  }};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', `?`],
  permLevel: 0
};

exports.help = {
  name: 'help',
      description: 'Displays this Bots commands',
  usage: 'help [command]'
};
