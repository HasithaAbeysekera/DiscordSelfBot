const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {

    const embed = new Discord.RichEmbed()
        .setImage(assets["carnival"])
        .setColor(15750656)
    message.channel.send(embed);
};

exports.help = {
    name: 'carnival',
    description: 'IT\'S A CARNIVAL'
};
