const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== "371105897570631691" && message.guild.id !== "424200844666208265") return;
    let VALembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/446989751250059264/tenor_1.gif");
    message.channel.send(VALembed);
}
module.exports.help = {
    name: "gm"
}