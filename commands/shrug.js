exports.run = (client, message) => {
  message.delete();
  message.channel.send(`¯\\\_(ツ)_/¯`);
};

exports.help = {
  name: 'shrug',
  description: 'shrug'
};
