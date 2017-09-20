exports.run = function(client, message, args) {
  message.delete();
    if (args == "") {
        client.user.setGame(null);
    } else {
        client.user.setGame(args.join(" "));
    }
};

exports.help = {
  name: 'setgame',
  description: 'Set status. eg: setgame [CSGO] will display "Playing CSGO"'
};
