const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
    .setImage(assets["thumbsup"])
    .setColor(0xFF0000)
  message.channel.send(embed);
};

exports.help = {
  name: 'thumbsup',
  description: 'Megumin approves'
};
