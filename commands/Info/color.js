const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let erroremebed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setDescription(`:x: You need to provide a hex code/color`)
    let erroremebed2 = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setDescription(`Nothing for that, Sorry.`)
    if(!args[0]) return message.channel.send(erroremebed);
    if (!/^[0-9A-F]{6}$/i.test(args[0].toString())) return message.channel.send(erroremebed2);
    let hex = args[0].toString();
    const colorembed = new Discord.RichEmbed()
    .setTitle(`Colors Provided By: **ColorHexa**`)
    .setColor(`${hex}`)
    .setThumbnail(`http://colorhexa.com/${hex}.png`)
    .addField(`Hex`, `#${hex}`)
    .setURL(`https://colorhexa.com/`)
    message.channel.send(colorembed);
}
module.exports.help = {
    name: "color",
    names: "Color"
}