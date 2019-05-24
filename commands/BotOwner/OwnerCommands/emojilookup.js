const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {
    if (msg.author.id !== '288450828837322764' && msg.author.id !== '391529339214364674') return msg.react('482868924573155349')
    let animEmotes = [],
        staticEmotes = [];
    let botserver = bot.guilds.get(args[0])
    botserver.emojis.forEach((e) => {
        e.animated ? animEmotes.push(`<a:${e.name}:${e.id}>`) : staticEmotes.push(`<:${e.name}:${e.id}>`);
    });
    staticEmotes = staticEmotes.length !== 0 ? `__**[${staticEmotes.length}] Normal Emotes**__\n${staticEmotes.join('')}` : '';
    animEmotes = animEmotes.length !== 0 ? `\n\n__**[${animEmotes.length}] Animated Emotes**__\n${animEmotes.join('')}` : '';

    let botembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(staticEmotes + animEmotes)
        .setAuthor(`${botserver.name} Emojis`, botserver.iconURL)
        .setTimestamp()
    msg.channel.send(botembed)

}
module.exports.help = {
    name: "emojilookup"
}