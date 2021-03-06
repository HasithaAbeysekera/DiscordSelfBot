const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
  if (message.mentions.users.first()) {
    let recipient = message.mentions.users.first();
    let randNumber = Math.floor((Math.random() * 3));

    const embedhug = new Discord.RichEmbed()
      .setDescription(`${recipient}, Holo wants to hug. Do you?`)
      .setImage(assets["hug"])
      .setColor(0x00FFFF);

    const embedhugn = new Discord.RichEmbed()
      .setImage(assets["hugn"][randNumber])
      .setColor(15750656);

    const embedhugy = new Discord.RichEmbed()
      .setImage(assets["hugy"])
      .setColor(15750656);

    message.channel.send(embedhug).then(newMsg => {
      newMsg.react(`❌`);
      newMsg.react(`✔`);
      const filter = (reaction, user) => reaction.emoji.name == `✔` && user.id == recipient.id;
      const collector = newMsg.createReactionCollector(filter, {
        time: 120000
      });

      const filter2 = (reaction2, user2) => reaction2.emoji.name == `❌` && user2.id == recipient.id;
      const collector2 = newMsg.createReactionCollector(filter2, {
        time: 120000
      });

      collector.on('collect', r => newMsg.delete().then(message.channel.send(embedhugy)));
      collector.on('end', message => console.log(`Collection timed out`));

      collector2.on('collect', r2 => newMsg.delete().then(message.channel.send(embedhugn)));
      collector2.on('end', message2 => console.log(`Collection timed out`));
    }).catch(console.error);
  } else {
    return;
  }
};

exports.help = {
  name: 'hug',
  description: 'Hugs a user'
};
