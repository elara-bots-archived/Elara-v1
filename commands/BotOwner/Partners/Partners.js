const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("OWNER")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let sIcon = message.guild.iconURL;
    let botembed = new Discord.RichEmbed()
        .setTitle("Partner Requirements!")
        .setDescription("Dm SUPERCHIEFYT your application to become Partners with you answering these following Questions. :arrow_down: ")
        .setColor("#000FF")
        .setThumbnail(sIcon)
        .addField(":one: ", "Send me a **Permanent** Link for your Server.")
        .addField(":two:", "Send me a Banner and Logo for your Server.")
        .addField(":three: ", "Tell me why we should Partner with your Server.")
        .addField(":four:", "Give me a Description Of your Server.")
        .addField(":five:", "Is your server Family Friendly.")
        .addField(":six:", "Make sure you have a Partner Role and Channel before you apply.")
        .addField("Info.", "If we decide to Partner with your server you will receive the Partners role and your server will be added to the #partners channel. and you will be able to access the partners only category to talk to other Partners and the staff team :smiley:")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/447442482544771092/pizap_5.png")
        .setFooter("Message From SUPERCHIEFYT", sIcon);

    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Partners"
}