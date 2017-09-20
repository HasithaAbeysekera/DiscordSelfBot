exports.run = (client, message) => {
  message.delete();
  message.channel.send("( ͡° ͜ʖ ͡°)");
};

exports.help = {
  name: 'lenny',
  description: 'Displays bot\'s current ping'
};
