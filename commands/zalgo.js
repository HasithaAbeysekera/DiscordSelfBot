var zalgo = require('zalgotxt');

exports.run = (client, message) => {
  let msg = message.content;
  message.channel.send(zalgo(`${msg}`));
};

exports.help = {
  name: 'zalgo',
  description: 'converts to zalgo'
};
