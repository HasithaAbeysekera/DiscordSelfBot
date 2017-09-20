exports.run = (client, message) => {
  message.delete();
    message.channel.send('Ping?')
        .then(msg => {
            msg.edit(`Pong! (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
        });
};

exports.help = {
  name: 'ping',
  description: 'Displays bot\'s current ping'
};
