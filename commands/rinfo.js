
exports.run = function(client, msg, args) {

let user = msg.mentions.users.first()
let Input = msg.guild.roles.find("name",args.join(" ")) || msg.mentions.roles.first() 
 if (!args.length) Input = msg.member.highestRole
if(!Input) return msg.reply(`It seems i couldent find a role with the name of **${args.join(" ")}**. Please try again.`)
let membersWithRole = msg.guild.roles.get(Input.id).members;
console.log(msg.channel.permissionsFor(msg.member).serialize())
let embed = {
        embed: {
color: Input.color,
description: `Members With This Role: **${membersWithRole.size}**\nName: **${Input.name}**   ${Input.toString()}\nMentionable: **${Input.mentionable ? "Yes" : "No"}**\nRole color: **${Input.color}** || **${Input.hexColor.toUpperCase()}**\n\n**Permissions**:\n ${msg.channel.permissionsFor(msg.member).serialize()}`,
            author: {
                name: `${Input.name} Info`,
                icon_url: msg.guild.iconURL,
        
            },
        },
    };
    msg.channel.send(embed);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rinfo',
  description: 'Get a roles info',
  usage: 'rinfo [Role Name]'
};
