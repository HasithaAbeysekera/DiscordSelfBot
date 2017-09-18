exports.run = function(client, message, args) {

  message.channel.send("Shutting down, Goodbye :wave:");

  client.destroy((err) => {
    console.log(err);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 3
};

exports.help = {
  name: 'shutdown',
  description: 'Shuts down Youmu',
  usage: 'shutdown'
};