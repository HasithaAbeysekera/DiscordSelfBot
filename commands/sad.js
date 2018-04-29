const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {

    size = assets["hugn"].length;
    randNumber = Math.floor((Math.random() * size));

    const embed = new Discord.RichEmbed()
      .setImage(assets["hugn"][randNumber])
      .setColor(0xFFFFFF)
    return message.channel.send(embed);
};

exports.help = {
  name: 'sad',
  description: 'Holo is sad'
};
