const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()
      .setImage(assets["joke"])
      .setColor(0xFFFFFF)
  message.channel.send(embed);
};

exports.help = {
  name: 'joke',
  description: 'is joke'
};
