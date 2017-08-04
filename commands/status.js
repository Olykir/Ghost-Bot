const Discord = require(`discord.js`)
const moment = require("moment");
require("moment-duration-format");
 const os = require('os');

exports.run = (client, message  , args) => {

  var cpuStat = require('cpu-stat');
var totalCores = cpuStat.totalCores();
let memUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
  let totalMem = Math.round(os.totalmem() / 1024 / 1024)
  let percentUsed = Math.round((memUsed / totalMem) * 100)
  let version = Discord.version
  let servers = client.guilds.size
  let users = client.users.size
  let Creator = "@Olykir#2588"
  let pcInfo = os.cpus()
  let info = "Intel(R) Core(TM) i7 CPU @​ 2.60GHz"
  let uptime = os.uptime()
  let guilds = client.guilds.size
  let OperatingSystem = os.platform()
  let vps = uptime * 1000
  
    const duration = moment.duration(client.uptime).format(" D [Days], H [Hours], m [Mins], s [Secs]");
const ServerUptime = moment.duration(vps).format(" D [Days], H [Hours], m [Mins]");


const embed = new Discord.RichEmbed()
  .setTitle('Information about Ghost Bot#0889')
/*
    Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
*/
  .setColor(message.member.displayColor)
  .setFooter('Status', 'https://cdn.discordapp.com/avatars/328444906936860675/42ceba8c4226be0ddbd7ef92cdcde741.png?size=2048')
  .setThumbnail('https://cdn.discordapp.com/avatars/328444906936860675/42ceba8c4226be0ddbd7ef92cdcde741.png?size=2048')
/*
    Takes a Date object, defaults to current date.
*/
  .setTimestamp()
  .addField('Bot Status', `Bot Presence: **Online**\nTotal Servers: **${client.guilds.size}**\nTotal Users: **${client.users.size}**\nUptime: **${duration}**\nDiscord.js Version: **v${Discord.version}**\nNode Version: **${process.version}**`)


message.channel.send({embed})

if(message.author.id === "265710840005525504" ) {
message.channel.send({embed: {title: `VPS Info`, description: `Specs: **${info}** \nServer Uptime: **${ServerUptime}**\nMemory Used: **${memUsed}** / **${totalMem}**  MBs`, color: message.member.displayColor}})
 
}


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stats", "info"],
  permLevel: 0
};
exports.help = {
  name: 'status',
  description: `Bot status`,
  usage: 'status'
};
  
