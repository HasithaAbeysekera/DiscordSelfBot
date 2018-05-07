exports.run = function(client, message, args) {
  client.user.setPresence({
      game: {
        name: args.join(" ")
      }
    })
    .then().catch(console.error);
};

exports.help = {
  name: 'setgame',
  description: 'Set Haruna\'s status.'
};
