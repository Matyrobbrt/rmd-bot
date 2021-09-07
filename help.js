const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
let helpEmbed = new MessageEmbed()
  .setColor('#211F1F')
  .setTitle('Command Help')
  .setTimestamp();

const botCommands = require('./commands/index.js');
var commands = new Discord.Collection();

const bot = require("./bot.js")

Object.keys(botCommands).map(key => {
  commands.set(botCommands[key].name, botCommands[key]);
  if (botCommands[key].aliases != undefined) {
    Object.keys(botCommands[key].aliases).map(aliasKey => {
      commands.set(botCommands[key].aliases[aliasKey], botCommands[key]);
    })
  }
});
console.log("Loaded help messages for: " + Object.keys(botCommands));

module.exports = {
  name: 'help',
  description: 'Offers help about a command!',
  helpEmbed: helpEmbed,
  execute(msg, args) {
    if (args[0] != null) {
      let command = args.shift().toString().toLowerCase();

      if (commands.has(command)) {

        try {
          if (commands.get(command).helpEmbed != null) msg.reply({ embeds: [commands.get(command).helpEmbed] });
          else {
            helpEmbed.setDescription(`The command *${command}* does not have any help message!`).setColor('BLUE');
            msg.reply({ embeds: [helpEmbed] });
          }
        } catch (error) {
          console.error(error);
          msg.reply('there was an error trying to execute that command!');
        }
      } else {
        helpEmbed.setDescription(`Unknown command *${command}*!\n\n` + `Run *` + "help" + `* for a list of commands!`).setColor('RED');
        msg.reply({ embeds: [helpEmbed] })
      }
    }
  }
};
