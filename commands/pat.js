const Discord = require("discord.js");

exports.run = function(client, message, args) {

  if (message.mentions.users.first()) {
    recipient = message.mentions.users.first();
    message.channel.send(`*Pats* ${recipient}`);
    size = assets["pat"].length;
    randNumber = Math.floor((Math.random() * size));

    const embed = new Discord.RichEmbed()
      .setImage(assets["pat"][randNumber])
      .setColor(0xFFFFFF)
    message.channel.send(embed);
  }
  return;
};

exports.help = {
  name: 'pat',
  description: 'Pats a user'
};
