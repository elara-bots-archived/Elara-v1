const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let replies = ['Heads', 'Tails']
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("Flipping Coin")

    message.channel.send(embed).then(message => {
        embed.setColor("#000FF")
        embed.setDescription(`You Flipped \`${replies[result]}\``)
        message.edit(embed)
    })
}
module.exports.help = {
    name: "flipcoin",
    names: "Flipcoin"
}