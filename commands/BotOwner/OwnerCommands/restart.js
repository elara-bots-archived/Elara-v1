const Discord = require("discord.js");
const fs = require('fs');
const config = require('../../../config.js')
module.exports.run = async (bot, message, args) => {
    let modlogs = bot.channels.get(process.env.LOGCHANNEL) || bot.channels.get(config.logchannel);
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Restart Issued", `<@${message.author.id}> Has Restarted the Bot!`)
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
        .setTimestamp()
    if (message.author.id !== "288450828837322764") return message.react(`❌`);
    await message.react("✅");
    await modlogs.send(botembed);
    message.delete().catch();
    process.exit();

}
module.exports.help = {
    name: "restart",
    names: "RT"
}