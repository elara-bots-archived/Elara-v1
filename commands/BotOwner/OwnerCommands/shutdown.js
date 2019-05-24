const Discord = require("discord.js");
const config = require('../../../config.js')
module.exports.run = async (bot, message, args) => {
    let logchannel = bot.channels.get(config.logchannel) || bot.channels.get(process.env.LOGCHANNEL)
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("ShutDown Issued", `<@${message.author.id}> Has ShutDown ${bot.user.username}`)
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
        .setTimestamp()
    if (message.author.id !== "288450828837322764") return message.react('482868924573155349')
    await message.react("476629550797684736");
    await logchannel.send(botembed);
    message.delete().catch();
    bot.commands.forEach( async cmd => {
        await bot.unloadCommand(cmd);
    });
    process.exit(1);
}
module.exports.help = {
    name: "shutdown",
    names: "Shutdown"
}