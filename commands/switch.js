

exports.run = (client, message) => {



 var resp = ["https://cdn.discordapp.com/attachments/328436806859227136/328437170891390976/jcg_gray.png", "https://cdn.discordapp.com/attachments/328436806859227136/328437148325904387/jcg_colors2.png", "https://cdn.discordapp.com/attachments/328436806859227136/328437118609391617/jcg_colors.png", "https://cdn.discordapp.com/attachments/328436806859227136/328437082248970240/jcg_6.png", "https://cdn.discordapp.com/attachments/328436806859227136/328437056655327232/jcg_5.png", "https://cdn.discordapp.com/attachments/328436806859227136/328437029400739851/jcg_4.png", "https://cdn.discordapp.com/attachments/328436806859227136/328437009641111555/jcg_3.png", "https://cdn.discordapp.com/attachments/328436806859227136/328436968922939393/jcg_2.png", "https://cdn.discordapp.com/attachments/328436806859227136/328436938715693057/jcg_1.png"];
        message.channel.send({embed: {color: message.member.displayColor,image: {url: resp[Math.floor(Math.random() * resp.length)]}}});


 
       
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'switch',
  description: 'Send a switch.',
  usage: 'switch'
};
