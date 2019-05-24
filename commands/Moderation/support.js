const Discord = require('discord.js');
const config = require('../../config.js')
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Sorry But you need the **Manage Server Permission** To Run this command!`)
    let logchannel = bot.channels.get(config.support)
    var options = {
        maxAge: 0
    };
    let Susername = message.author;
    let Suseravatar = message.author.avatarURL;
    let server = message.guild;
    let Schannel = message.channel;
    let reason = args.join(' ');
    if(!reason) return message.reply(`Please Provide a reason for this Support request!`)
    message.delete().catch()
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`Creating......`)
        .setTimestamp()
    message.delete(15000).catch()
    logchannel.send(embed).then(message => {
        Schannel.createInvite(options).then(i => {
            embed.setColor(`RANDOM`)
            embed.setDescription(`${Susername} Has Put in a Support Request!`)
            embed.addField(`User`, Susername, true)
            embed.addField(`User ID`, Susername.id, true)
            embed.addField(`Server`, server.name, true)
            embed.addField(`Server ID`, server.id, true)
            embed.addField(`Channel`, Schannel.name, true)
            embed.addField(`Channel ID`, Schannel.id, true)
            embed.addField(`Server Invite`, `https://discord.gg/${i.code}`, true)
            embed.setFooter(`Support Requested At`)
            embed.setTimestamp()
            embed.setThumbnail(Suseravatar)
            embed.addField(`Reason`, reason)
            message.edit(embed)
        })
    }).then(message => {
        Schannel.send(`${Susername} You message has been given to the bot support team! they will get back to you as soon as possible!`)
    })
}
module.exports.help = {
    name: "support",
    names: "Support"
}