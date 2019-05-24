const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let aTaged = message.mentions.users.first() || message.author;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage(`${aTaged.displayAvatarURL}` || `${aTaged.defaultAvatarURL}`)
        .setAuthor(`${aTaged.username}` , `${aTaged.displayAvatarURL}`|| `${aTaged.defaultAvatarURL}`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.displayAvatarURL || `${message.author.defaultAvatarURL}`);
    message.channel.send(botembed);   
}
module.exports.help = {
    name: "avatar",
    names: "Avatar"
};