

exports.run = (client, message) => {





  message.react(`👍`).then(m=>{
     setTimeout(() => {
       process.exit(1);
     }, 500);
   });
       
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Reboots the bot. **(Owner Only)**',
  usage: 'reboot'
};
