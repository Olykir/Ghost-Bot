
exports.run = function(client, msg, args) {

 const moment = require("moment");
    const time = require("moment-duration-format");
    let channel = msg.mentions.channels.first() || client.channels.get(args[0]) || msg.guild.channels.find("name", args.join(" "));
    if (!args.length) channel = msg.channel;
    if (!channel) return msg.channel.send("Could not find a channel with that name or ID.");
let ChannelTopic = channel.topic ? channel.topic : "This channel does not have a topic."
    let embed = {
        embed: {
title: `Channel info.`,
color: msg.member.displayColor,
description: `Channel ID: **${channel.id}**\nType of channel: **${channel.type}**\nChannel topic: **${ChannelTopic}**`,
            author: {
                name: `${channel.name} in ${channel.guild.name}`,
                icon_url: channel.guild.iconURL ? channel.guild.iconURL : channel.guild.owner.user.displayAvatarURL,
            },
        },
    };
    msg.channel.send(embed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["channelinfo"],
  permLevel: 0
};

exports.help = {
  name: 'cinfo',
  description: 'Get channel info',
  usage: 'cinfo [Channel ID]'
};
