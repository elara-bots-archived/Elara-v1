const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor("Owner ", "")
        .setImage("")
        .setThumbnail("")
        .setTitle("Welcome To  Discord Server.")
        .setURL("")
        .addField("What does the server Provide?", "")
        .addField("Discord Invite", "")



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "New Partner"

}