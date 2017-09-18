exports.run = (client, message) => {
  message.delete();
  message.channel.send("┬─┬﻿ ノ( ゜-゜ノ)");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'unflip',
  description: 'Displays bot\'s current ping'
};
