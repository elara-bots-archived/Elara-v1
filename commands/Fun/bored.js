const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>{
    if (message.guild.id !== "371105897570631691" && message.guild.id !== "424200844666208265") return;
    let bicon = ("https://cdn.discordapp.com/attachments/444028025932349441/446291474221629440/tenor_16.gif");
    let botembed = new Discord.RichEmbed()
    .setColor("#000FF")
    .setFooter("BORED")
    .setImage(bicon);
message.channel.send(botembed);
}
module.exports.help = {
    name: "bored"
};