const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor("#800080")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445664707567812628/tenor_8.gif")
        .setFooter("Roo <3", "https://cdn.discordapp.com/attachments/444028025932349441/445664707567812628/tenor_8.gif")
        message.channel.send(embed)
}
module.exports.help = {
    name: "Roo",
    names: "roo"

}