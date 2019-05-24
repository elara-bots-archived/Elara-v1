const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    try {
        if (args[0] === "help") {
            let embeds = new Discord.RichEmbed()
                .setColor(`RANDOM`)
                .setTitle(`**${this.help.usage}**`)
                .setTimestamp()
                .setFooter(`Don't include <> in the command`, message.author.avatarURL)
            message.channel.send(embeds);
            return;
        }
        let search = args.join(' ') || args[0];
        if (!search) return message.channel.send(`You need to provide a name or ID of the Emoji.`)
        let emoji = bot.emojis.find('name', search) || bot.emojis.find('id', search)
        if (!emoji) return message.channel.send(`Nothing for that.`)
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(`Emoji Info`)
            .addField(`Emoji Name`, emoji.name, true)
            .addField(`Emoji ID`, emoji.id, true)
            .addField(`Emoji URL`, `[Click Here](${emoji.url})`, true)
            .addField(`Animated`, `${emoji.animated}`, true)
            .addField(`Managed`, emoji.managed, true)
            .addField(`Emoji Server`, emoji.guild.name, true)
            .setThumbnail(emoji.url)
        message.channel.send(embed)
    } catch (e) {
        message.channel.send(`Can't find that emoji, Sorry.`)
    }
}
module.exports.help = {
    name: "emojifind",
    names: "emote",
    usage: "e!emote <name or ID here>"
}