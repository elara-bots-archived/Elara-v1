const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    try {
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Can't use this command`).then(message => {message.delete(10000).catch()})
        if (!args[0]) return message.channel.send('Please Provide a Link!\nExample `e!createemoji linkhere namehere`')
        if (!args[1]) return message.channel.send('Please Provide a Name!\nExample `e!createemoji linkhere namehere`')
        message.guild.createEmoji(args[0], args[1])
            .then(emoji => {
                let embed = new Discord.RichEmbed()
                    .setColor(`RANDOM`)
                    .setDescription(`Created the Emoji! **${emoji.name}** ${emoji}`)
                    .setImage(emoji.url)
                message.channel.send(embed)
            })
            .catch(console.error);
    } catch (e) {
        message.channel.send(`ERROR\n${e}`)
    }
}
module.exports.help = {
    name: "createemoji",
    names: "CreateEmoji"
}