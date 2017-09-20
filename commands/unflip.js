exports.run = (client, message) => {
  message.delete();
  message.channel.send("┬─┬﻿ ノ( ゜-゜ノ)");
};

exports.help = {
  name: 'unflip',
  description: 'Displays bot\'s current ping'
};
