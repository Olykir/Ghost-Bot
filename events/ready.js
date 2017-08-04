  const Status = ["Im a ghost", "Boo", "Scary right?","New Update!"];
 const Discord = require(`discord.js`)
module.exports = (client, message) => {
 

client.user.setGame(Status[Math.floor(Math.random() * Status.length)],"https://www.twitch.tv/olykir");
client.user.setStatus('online');
};
