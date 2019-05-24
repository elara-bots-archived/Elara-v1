const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== "371105897570631691" && message.guild.id !== "424200844666208265") return;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445662962544410646/tenor_7.gif");
    message.channel.send(botembed);
}
module.exports.help = {
    name: "gurl"
}