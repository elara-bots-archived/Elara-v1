const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("This Chat is for the Partners to announce contests and announcements in their server if they want to :stuck_out_tongue: and Partners you can send links in this chat for the announcements/contests etc :stuck_out_tongue:")
        .setThumbnail(message.guild.iconURL)
        .setFooter("Message From SUPERCHIEFYT", message.guild.iconURL)




    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Announcements"

}