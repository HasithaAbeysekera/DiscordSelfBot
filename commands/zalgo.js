var zalgo = require('zalgotxt');

exports.run = (client, message, args) => {
  let msg = args.join(" ");
  message.channel.send(zalgo(`${msg}`));
};

exports.help = {
  name: 'zalgo',
  description: 'converts to zalgo'
};
