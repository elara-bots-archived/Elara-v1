const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445640610808856606/tenor_4.gif");
    message.channel.send(botembed);
}
module.exports.help = {
    name: "Pizza",
    names: "pizza"
}