const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
        .setImage(assets["runpika"])
        .setColor(0xFFFF00)
    message.channel.send(embed);
};

exports.help = {
  name: 'runpika',
  description: 'Whoa Whoa! Whoa Whoa!'
};
