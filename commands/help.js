const Discord = require("discord.js");
const prefix = require('../config.json').prefix;
exports.run = (client, message, args) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    // message.channel.sendCode('asciidoc', `Youmu-chan's Command List\n\n[Use ${prefix}help <commandname> for details]\n\n${client.commands.map(c => `${prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
    const embed = new Discord.RichEmbed()
      .setAuthor(`\u200b`, `${message.author.avatarURL}`)
      .setTitle(`SelfBot\'s Commands List`)
      .setThumbnail(client.user.avatarURL)
      .setColor(0x00AE86)
      .addField('\u200b', '\u200b', true)
      .setTimestamp();

    for (i = 0; i < client.commands.size; i++) {
      clist = client.commands.array()[i];
      embed.addField(`${prefix}${clist.help.name}`, `${clist.help.description}`);
    }
    message.channel.send(embed);
  }
};

exports.help = {
  name: 'help',
  description: 'Displays command list'
};
