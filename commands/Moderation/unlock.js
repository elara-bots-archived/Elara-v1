const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
    const nopermembed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setDescription(`<@${message.author.id}> You Don't have the Manage Messages Permission!`)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermembed);
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
    });
    const lockembed = new Discord.RichEmbed()
        .setColor(`#FF000`)
        .setDescription(`<@${message.author.id}> This Channel is now Unlocked!`)
    message.channel.send(lockembed)
}
module.exports.help = {
    name: "unlock",
    names: "Unlock"
}