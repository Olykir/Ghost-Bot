

exports.run = (client, message, args) => {



message.delete()
const content = message.content.split(' ').slice(1).join(' ');
const result = new Promise((resolve, reject) => resolve(eval(content)));

return result.then(output => {
const men = 10
const women = 1
  if (typeof output !== 'string') output = require('util').inspect(output, {
    depth: 0
  });
  if (output.includes(client.token)) output = output.replace(client.token, 'SuperSecretToken');

  if (output.length > 1990) console.log(output), output = 'Too long to be printed (content got console logged)';

  return message.channel.send({embed: {color: message.member.displayColor,title: `Evaled Code`, description: `:inbox_tray: **Input**:\n\`\`\`js\n${content}\`\`\`\n\n:outbox_tray: **Output**:\n\`\`\`js\n${output}\`\`\`\n\n\n**This message will be destroyed in 60 seconds.**`}});
}).then(m => m.delete(60000)).catch(err => {
  console.error(err)
  err = err.toString();



  return message.channel.send({embed: {color: message.member.displayColor, title: `Your error is...`, description: `:inbox_tray: **Input**: \`\`\`js\n${content}\`\`\`\n\n:outbox_tray: **Output**:\`\`\`js\n${err}\`\`\`\n\n\n**This message will be destroyed in 60 seconds.**`}});
}).then(m => m.delete(60000))



};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Eval some code. **(Owner Only)**',
  usage: 'eval [code]'
};
