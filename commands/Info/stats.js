const { version } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message, args) => {
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
const embed = new Discord.RichEmbed()
.setColor(`#FF000`)
.setThumbnail(bot.user.avatarURL)
.addField(`Memory Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField(`Bot Version`, `2.0.0`, true)
.addField(`Uptime`, `${duration}`, true)
.addField(`Users`, `${bot.users.size.toLocaleString()}`, true)
.addField(`Servers`, `${bot.guilds.size.toLocaleString()}`, true)
.addField(`Channels`, `${bot.channels.size.toLocaleString()}`, true)
.addField(`Discord.js Version`, `v${version}`, true)
.addField(`Node Version`, `${process.version}`, true)
message.channel.send(embed);
}
module.exports.help = {
    name: "stats",
    names: "Stats"
}