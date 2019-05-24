const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== "371105897570631691" && message.guild.id !== "424200844666208265") return;
    let botembed = new Discord.RichEmbed()
        .setColor("#800080")
        .setImage("https://cdn.discordapp.com/emojis/411452098832629760.gif?v=1");
    message.channel.send(botembed);
}
module.exports.help = {
    name: "cute"
}
