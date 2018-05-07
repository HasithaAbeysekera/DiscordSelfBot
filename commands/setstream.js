exports.run = function(client, message, args) {
  client.user.setPresence({
    game: {
      name: args.join(" "),
      url: "https://www.twitch.tv/holo_thewise"
    }
  }).then().catch(console.error);
};


exports.help = {
  name: 'setstream',
  description: 'Change Haruna\'s status to streaming [streamtitle]'
};
