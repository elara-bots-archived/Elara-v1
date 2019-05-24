const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    try {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Sorry But you can't do this command!`).then(message => {message.delete(10000).catch()})
        if (!args[0]) return message.channel.send('Please Provide a link to a photo/emoji Example `ed!restrictemoji linkhere NameHere RoleID`')
        if (!args[1]) return message.channel.send('Please Provide a Emoji name! Example `ed!restrictemoji linkhere NameHere RoleID`')
        if (!args[2]) return message.channel.send('Please Provide a Role ID to restrict the emoji to! Example `ed!restrictemoji linkhere NameHere RoleID`')
        message.guild.createEmoji(args[0], args[1], [args[2]])
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
    name: "restrictemoji"
}
