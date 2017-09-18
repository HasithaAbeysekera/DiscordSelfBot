exports.run = (client, message) => {
  message.delete();
  message.channel.send("(╯°□°）╯︵ ┻━┻");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'flip',
  description: 'Displays bot\'s current ping'
};
