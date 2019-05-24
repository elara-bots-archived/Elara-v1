const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setColor(`RANDOM`)
.setFooter(`Command Ran By: ${message.author.tag}`, message.author.avatarURL)
.setTitle(`**Text Channels**`)
.setTimestamp()
.setDescription(`${message.guild.channels.filter(c => c.type == "text").map(c => `<#${c.id}>`).join(", ")}`)
.addField(`Voice Channels`, `${message.guild.channels.filter(c => c.type == "voice").map(c => `${c.name}`).join(", ")}`)
.addField(`Categorys`, `${message.guild.channels.filter(c => c.type == "category").map(c => `${c.name}`).join(", ")}`)


message.channel.send(embed)
}
module.exports.help = {
    name: "channels",
    names: "Channels"
}