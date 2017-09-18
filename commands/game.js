exports.run = function(client, message, args) {
  message.delete();
  if (client.user.presence.game) {
    message.channel.send(`Current game: ${client.user.presence.game.name}`);
  } else {
    message.channel.send("Current game: Nothing");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 3
};

exports.help = {
  name: 'game',
  description: 'Set status. eg: setgame [CSGO] will display "Playing CSGO"',
  usage: 'game [game]'
};
