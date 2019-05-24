const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
    let loadingembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(`<a:Dots:426956230582599690> Loading......`)
        .setTimestamp()
    const message = msg
    const m = await msg.channel.send(loadingembed);
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .addField(`Message Latency`, `${m.createdTimestamp - msg.createdTimestamp}ms`, true)
        .addField(`Bot Latency`, `${Math.round(client.ping)}ms`, true)
        .setAuthor(client.user.username, client.user.avatarURL)
    m.edit({ embed });
}
module.exports.help = {
    name: "ping",
    names: "Ping"
}