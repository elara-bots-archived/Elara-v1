const { RichEmbed } = require('discord.js');
const hastebin = require('hastebin-gen');
module.exports.run = async (bot, message, args, ops) => {
    if (message.author.id !== ops) return;
    let string = '';
    bot.guilds.forEach(guild => { string += `Server Name: (${guild.name})\nServer ID: (${guild.id})\nServer Icon: (${guild.iconURL}\n Member Count ${guild.memberCount})` + '\n\n'; })
    hastebin(string, "js").then(r => {
        var hastLink = r
        const hastEmb = new RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`Here is a List of all of the Servers: Current Number of Servers **${bot.guilds.size}**`)
            .addField('Link: ', `${hastLink}`)
        message.channel.send(hastEmb)
    })
}
module.exports.help = {
    name: "servers"
}