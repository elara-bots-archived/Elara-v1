const Discord = require('discord.js'); 
module.exports.run = async (bot, message, args) => {
let iUser = message.mentions.members.first() || message.author;
const embed = new Discord.RichEmbed()
.setColor(`#FF000`)
.setDescription(`<@${iUser.id}>'s ID is **${iUser.id}**`)
message.channel.send(embed);
}
module.exports.help = {
    name: "id",
    names: "ID"
}