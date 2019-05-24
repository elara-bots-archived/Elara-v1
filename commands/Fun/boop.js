const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.guild.id !== "371105897570631691" && message.guild.id !== "424200844666208265") return;
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage("https://media1.tenor.com/images/558b3577f8828bae6e2a5d9a24272582/tenor.gif?itemid=5691456")
        .setFooter("Boop")
    message.channel.send(embed);    
}
module.exports.help = {
    name: "boop"

}