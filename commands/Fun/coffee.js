const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== "371105897570631691" && message.guild.id !== "424200844666208265") return;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445661748024967168/tenor_5.gif");



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "coffee"
}