const { RichEmbed } = require('discord.js');
module.exports.run = async (bot, msg, args) => {
    let embed = new RichEmbed()
        .setColor(`RANDOM`)
        .setImage(`https://i.imgur.com/X20kba7.gif`)
    msg.channel.send(embed)
}
module.exports.help = {
    name: "googleit",
    names: "Googleit"
}