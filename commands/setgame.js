exports.run = function(client, message, args) {
  message.delete();
    if (args == "") {
        client.user.setGame(null);
    } else {
        client.user.setGame(args.join(" "));
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 3
};

exports.help = {
  name: 'setgame',
  description: 'Set status. eg: setgame [CSGO] will display "Playing CSGO"',
  usage: 'setgame [game]'
};
