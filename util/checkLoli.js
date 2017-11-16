const Discord = require("discord.js");
var assets = require('../assets/assets.json');
/*
Get user object when given a targetUser string
*/
module.exports = (message) => {
  console.log("lolicheck");
  let messageStr = message.content;
  let offender = message.author;
  var re = /(^|\s)loli(\s|$)/i;
  //  let check = messageStr.test(\s(loli)\s/i);
  let check = re.test(messageStr);
  if (check) {
    message.channel.send(`${offender}, the Lolice are watching....`)
    const embed = new Discord.RichEmbed()
      .setImage(assets["lolice"])
      .setColor(000000)
    message.channel.send(embed);
  }
};
