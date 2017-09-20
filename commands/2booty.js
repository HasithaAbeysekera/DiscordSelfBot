const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {

    const embed = new Discord.RichEmbed()
        .setImage(assets["2booty"])
        .setColor(000000)
    message.channel.send(embed);
};


exports.help = {
    name: '2booty',
    description: 'We all know why you played NieR:Automata'
};
