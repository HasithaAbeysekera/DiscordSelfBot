const Discord = require("discord.js");
const fs = require('fs');
const moment = require('moment');
const client = new Discord.Client();
const token = require("./config.json").token;
const prefix = require("./config.json").prefix;
const ownerid = require("./config.json").ownerid;
require('./util/EventLoader')(client);
client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`Loading Command: ${props.help.name}. Done!`);
    client.commands.set(props.help.name, props);
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.commands.set(command, cmd);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.login(token);

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});
