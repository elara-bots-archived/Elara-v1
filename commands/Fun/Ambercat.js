const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    let replies = [
        'https://cdn.discordapp.com/attachments/439520700307603466/477985953009631237/image.jpg',
        'https://cdn.discordapp.com/attachments/439520700307603466/477986377246441482/image.jpg',
        'https://cdn.discordapp.com/attachments/439520700307603466/477986609128800266/image.jpg',
        'https://cdn.discordapp.com/attachments/439520700307603466/477987194729005066/image.jpg',
        'https://cdn.discordapp.com/attachments/439520700307603466/477987363029647360/image.jpg',
        'https://cdn.discordapp.com/attachments/439520700307603466/477987531896651776/image.jpg',
        'https://cdn.discordapp.com/attachments/439520700307603466/477987762193301522/image.jpg',
        'https://cdn.discordapp.com/attachments/439520700307603466/477987908985290762/image.jpg',
        'https://cdn.discordapp.com/attachments/439520700307603466/477988122320175104/image.jpg',
        'https://cdn.discordapp.com/attachments/439520700307603466/477988525497909288/image.jpg',
        'https://cdn.discordapp.com/attachments/457038924104204299/480138219308974080/image.jpg'
    ]
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading the Command, Please Wait.,,,,")

    message.channel.send(embed).then(message => {
        embed.setColor("#000FF")
        embed.setDescription("Here's a Photo of Amber 😊")
        embed.setImage(replies[result])
        embed.setFooter("Command Ran By: " + usernameid, userURL)
        message.edit(embed)
    })
}
module.exports.help = {
    name: "amber",
    names: "Amber"
}