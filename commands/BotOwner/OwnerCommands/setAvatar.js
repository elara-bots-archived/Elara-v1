const Discord = require("discord.js");
const config = require('../../../config.js')
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.react(`❌`);
    let logchannel = bot.channels.get(process.env.LOGCHANNEL) || bot.channels.get(config.logchannel)
    image = message.attachments.first().url;
    bot.user.setAvatar(image);
    message.react(`476629550797684736`)
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(`Profile Photo Changed!\n\n **Old Profile Photo --->**\n\n**New Profile Photo**`)
        .setImage(image)
        .setThumbnail(bot.user.avatarURL)
    logchannel.send(embed)
}
module.exports.help = {
    name: "setavatar",
    names: "SA"
}