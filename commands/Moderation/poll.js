const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Sorry But you need the Manage Messages Permission.`)
    let suggestionchannel = message.mentions.channels.first()
    if (!args.slice(1).join(' ')) return message.channel.send(`Please Provide Something for the Poll!`)
    message.delete().catch()
    const embed = new Discord.RichEmbed()
        .setColor(`#000FF`)
        .setDescription(args.slice(1).join(' '))
        .setTitle(`Poll Created By ${message.author.username}`)
        .setFooter(`React to Vote!`)
    suggestionchannel.send(embed).then(message => {
        message.react(`👍`)
        message.react(`👎`)
    })
}
module.exports.help = {
    name: "poll",
    names: "Poll"
}