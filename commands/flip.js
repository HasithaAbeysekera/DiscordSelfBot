exports.run = (client, message) => {
  message.delete();
  message.channel.send("(╯°□°）╯︵ ┻━┻");
};

exports.help = {
  name: 'flip',
  description: 'Displays bot\'s current ping'
};
