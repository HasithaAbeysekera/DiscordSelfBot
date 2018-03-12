exports.run = function(client, message, args) {
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
