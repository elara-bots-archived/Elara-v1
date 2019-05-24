const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let serverSize = message.guild.memberCount;
    let botCount = message.guild.members.filter(m => m.user.bot).size;
    let humanCount = serverSize - botCount;
const embed = new Discord.RichEmbed()
.setColor(`RANDOM`)
.setTimestamp()
.addField(`Members`, `**${serverSize}**`, true)
.addField(`Humans`, `**${humanCount}**`, true)
.addField(`Bots`, `**${botCount}**`, true)
.addField(`Member Statuses`, `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible`, true)
message.channel.send(embed)
}
module.exports.help = {
    name: "membercount",
    names: "mc"
}