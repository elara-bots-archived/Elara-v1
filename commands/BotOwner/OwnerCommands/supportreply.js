const Discord = require('discord.js');
const config = require('../../../config.js')
module.exports.run = async (bot, message, args) => {
    if(message.author.id !== config.SC) return;
    let replychannel = bot.channels.get(args[0]) || bot.users.get(args[0])
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(args.slice(1).join(' '))
        .setAuthor(message.author.username, message.author.avatarURL)
    replychannel.send(embed)
    await message.channel.send(`Message has been successfully sent.`)
}
module.exports.help = {
    name: "reply"
}