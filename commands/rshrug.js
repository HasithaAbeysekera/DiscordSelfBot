const Discord = require("discord.js");
var assets = require('../assets/assets.json');
exports.run = (client, message) => {
  message.delete();
message.channel.send(new Discord.Attachment(assets["rshrug"], 'dark.png'))
};

exports.help = {
  name: 'rshrug',
  description: 'riko shrug'
};
