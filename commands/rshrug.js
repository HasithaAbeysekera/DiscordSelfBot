const Discord = require("discord.js");
var assets = require('../assets/assets.json');
exports.run = (client, message) => {
  message.delete();
message.channel.send(new Discord.Attachment(assets["rshrug"], 'dark.png'))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'rshrug',
  description: 'riko shrug'
};
