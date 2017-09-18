const Discord = require("discord.js");
var request = require("request");
const fs = require('fs');
var validRegions = ["sea", "na", "eu", "ru"];
exports.run = function(client, message, args) {

  picURL = `https://asia.warshipstoday.com/signature/2003655131/dark.png`
  message.channel.send(new Discord.Attachment(picURL, 'dark.png')).then(msg => {
    console.log("wtr image sent");
  }).catch(err => {
    console.log(err.stack);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'wtr',
  description: 'Test function for WoWs commands',
  usage: 'wtr [region] [username]'
};
