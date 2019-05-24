const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let logchannel = bot.channels.get('484516862789681162')
    var options = {
        maxAge: 0
    };
    let Susername = message.author;
    let Suseravatar = message.author.avatarURL;
    let server = message.guild;
    let Schannel = message.channel;
    let reason = args.join(' ');
    message.delete().catch()
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`Creating......`)
        .setTimestamp()
    message.delete(15000).catch()
    logchannel.send(embed).then(message => {
        Schannel.createInvite(options).then(i => {
            embed.setColor(`RANDOM`)
            embed.setDescription(`${Susername} Has Put in a Suggestion Request!`)
            embed.addField(`User`, Susername, true)
            embed.addField(`User ID`, Susername.id, true)
            embed.addField(`Server`, server.name, true)
            embed.addField(`Server ID`, server.id, true)
            embed.addField(`Channel`, Schannel.name, true)
            embed.addField(`Channel ID`, Schannel.id, true)
            embed.addField(`Server Invite`, `https://discord.gg/${i.code}`, true)
            embed.setFooter(`Suggestion Requested At`)
            embed.setTimestamp()
            embed.setThumbnail(Suseravatar)
            embed.addField(`Reason`, reason)
            message.edit(embed)
        })
    }).then(message => {
        Schannel.send(`${Susername} Your Suggestion has been given to the bot support team!\n**This Message will delete in 10 Seconds**`).then(message => { message.delete(10000).catch() })
    })
}
module.exports.help = {
    name: "botsuggest",
    names: "BotSuggest"
}