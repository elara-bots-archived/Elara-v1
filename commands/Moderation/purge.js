const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permission to use this command.");
    let prunenumber = args.join(' ');
    const noembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setDescription("Please Provide a number between **1 to 100**")
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    const clearembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription(`Deleted ${prunenumber} messages.`)
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    if (!prunenumber) return message.channel.send(noembed);
    message.channel.bulkDelete(prunenumber).then(() => {
        message.channel.send(clearembed).then(msg => msg.delete(5000));

    });
}
module.exports.help = {
    name: "purge",
    names: "Purge"
}