exports.run = function(client, message, args) {
  client.user.setPresence({
    game: {
      name: args.join(" "),
      type: "WATCHING"
    }
  }).then().catch(console.error);
};

exports.help = {
  name: 'setwatch',
  description: 'Change Haruna\'s status to watching [something]'
};
