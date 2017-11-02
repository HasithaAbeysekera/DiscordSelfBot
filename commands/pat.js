const Discord = require("discord.js");
var getUser = require('../util/getUser.js');
const owner = require('../config.json').ownerid;

exports.run = function(client, message, args) {
  var recipient;
  if (!args[0]) {
    if (message.channel.type == "dm") {
      recipient = message.channel.recipient;
    }
  } else {
    if (message.mentions.users.first()) {
      recipient = message.mentions.users.first();
    } else {
      recipient = getUser(message, args[0]);
    }
  }

  if (recipient) {
    return message.channel.send(`*Pats* ${recipient}`);
  }
  return;
}
exports.help = {
  name: 'pat',
  description: 'Pats a user'
};
