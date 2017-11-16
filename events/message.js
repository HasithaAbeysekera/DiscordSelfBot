const prefix = require('../config.json').prefix;
var checkLoli = require('../util/checkLoli.js');
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (message.author !== client.user) {
    if (message.guild.id == 222658565075107840) {
      checkLoli(message);
    } else {
      return;
    }
    return;
  };

  if (!message.content.startsWith(prefix)) {
    if (message.guild.id == 222658565075107840) {
      checkLoli(message);
    } else {
      return;
    }
    return;
  };

  let command = message.content.split(' ')[0].slice(prefix.length);
  let args = message.content.split(' ').slice(1);
  let cmd;

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
    console.log(`Command ${command} activated`);
  } else {
    return;
  }
  if (cmd) {
    message.delete();
    cmd.run(client, message, args);
  } else {
    return;
  }
};
