exports.run = function(client, message, args) {
    client.user.setPresence({
      game: {
        name: args.join(" "),
        type: "LISTENING"
      }
    }).then().catch(console.error);
};

exports.help = {
  name: 'setlisten',
  description: 'Change Haruna\'s status to listening to [something]'
};
