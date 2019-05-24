const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== "371105897570631691" && message.guild.id !== "424200844666208265") return;
    let botembed = new Discord.RichEmbed()
        .setColor("#800080")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445660773231099904/417730643070418955.gif");
    message.channel.send(botembed);
}
module.exports.help = {
    name: "Sadeyes",
    names: "sadeyes"

}