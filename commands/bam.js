exports.run = (client, message, args) => {

 
const member = message.mentions.members.first();
  if(args.length < 1) return message.reply("Please mention someone!")
let user = message.mentions.users.first(); // Define user

var Bam = ["Bam!",`${user.toString()} Has been struck with your mighty hammer :hammer:`];

  message.channel.send({embed: {color: member.displayColor,description: `${Bam[Math.floor(Math.random() * Bam.length)]}`}}) // Message reply
     
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'bam',
  description: 'Strike someone with your mighty hammer. ',
  usage: 'bam [user]',
    type: 'Fun'
};
