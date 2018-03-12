exports.run = function(client, message, args) {
  
  if (client.user.presence.game) {
    message.channel.send(`Current game: ${client.user.presence.game.name}`);
  } else {
    message.channel.send("Current game: Nothing");
  }
};

exports.help = {
  name: 'game',
  description: 'Set status. eg: setgame [CSGO] will display "Playing CSGO"'
};
