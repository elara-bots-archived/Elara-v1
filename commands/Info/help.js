const Discord = require("discord.js");
const config = require('../../config.js')
module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("This is the Help Information")
        .addField(`Prefixes`, config.prefix)
        .addField(`Bot Owner`, '`eval`, `restart`, `SA`, `SN`, `leaveserver`')
        .addField(`Fun`, '`8ball`, `ascii`, `card`, `cat`, `catfact`, `catgif`, `emojify`, `emote`, `flipcoin`, `cookie @user`, `dog`, `dogfact`, `fortune`, `morse`, `PJ`, `Amber`, `pug`, `roll`, `rps`, `throw`, `tiny`, `turtle`')
        .addField(`Info`, '`avatar`, `bothelp`, `botinfo`, `botsuggest <message here>`, `color`, `emojis`, `help`, `id`, `members <rolename>`, `math`, `membercount`, `npm`, `ping`, `roleinfo`, `roles`, `channels`, `serverinfo`, `Invite`, `stats`, `topinvites`, `weather`, `whois`')
        .addField(`Moderation`, '`addrole`, `ban`, `createemoji`, `change`, `kick`, `lockdown`, `mute`, `nick`, `poll`, `prune`, `purge`, `removerole`, `report`, `restrictemoji`, `rolecolor`, `say`, `softban`, `support`, `unban`, `unlock`, `warn`')
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
}
module.exports.help = {
    name: "help",
    names: "Help"
}