 const chalk = require('chalk');
 const os = require('os');
 const Discord = require(`discord.js`)
module.exports = (client, message) => {
  var colors = require('colors');
  let memUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
  let totalMem = Math.round(os.totalmem() / 1024 / 1024)
  let percentUsed = Math.round((memUsed / totalMem) * 100)
  let version = Discord.version
  let servers = client.guilds.size
  let users = client.users.size
  let Creator = "@Olykir#2588"
  let pcInfo = os.cpus()
  let info = "Intel(R) Core(TM) i5-3320M CPU @​ 2.60GHz"
  let uptime = os.uptime()
  let guilds = client.guilds.size
  let OperatingSystem = os.platform()

var Status = ["Im a ghost", "Boo", "Scary right?"];


client.user.setGame(`${Status[Math.floor(Math.random() * Status.length)]}`,'https://www.twitch.tv/olykir');
client.user.setStatus('streaming');


  console.log(`Memory Availible                     === ${totalMem} MB (${totalMem / 1024} GB)`.red)
  console.log(`Memory Used Percentage               === ${percentUsed}%`.red)
  console.log(`Memory Usage                         === ${memUsed} MB (${memUsed / 1024} GB)`.red)
  console.log(`Server Info                          === ${info}`.red)
  console.log(`Operating System                     === ${OperatingSystem}`.red)
  console.log(`Server Uptime                        === ${uptime / 60 / 60} Hours`.red)
  console.log(`\n \n \nI\'m Online`.red)
  console.log(`Logged in as Ghost Bot`.red)
  console.log(`\n \nGuild Count                          === ${guilds} Guilds`.red)
  console.log(`User Count                           === ${users} Users`.red)



};
