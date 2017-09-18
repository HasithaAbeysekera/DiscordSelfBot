exports.run = (client, message) => {
  message.delete();
  message.channel.send(`¯\\\_(ツ)_/¯`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'shrug',
  description: 'shrug'
};
