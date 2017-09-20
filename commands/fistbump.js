const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
        .setImage(assets["fistbump"])
        .setColor(0x00FFFF)
    message.channel.send(embed);
};

exports.help = {
    name: 'fistbump',
    description: 'A symbol of giving respect or approval'
};
