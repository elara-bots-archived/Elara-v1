const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    const userURL = message.author.avatarURL;
    const usernameid = message.author;
    let cUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!cUser) return message.reply(`Sorry But you can't give a cookie to yourself xD`)
    const replies = [
        "https://media1.tenor.com/images/a785d6e7bc6464029a845283fc788a1c/tenor.gif?itemid=4159694", "https://media1.tenor.com/images/220e5c94558847014219d80f350d2c77/tenor.gif?itemid=4514801", "https://media1.tenor.com/images/79a141d4c20c3cf98bcb290b8566e175/tenor.gif?itemid=4514802", "https://media1.tenor.com/images/a2c7764bd9a445140d2273b396027be7/tenor.gif?itemid=4929293", "https://media1.tenor.com/images/e09e910132da19bf3285f159d0d35b4d/tenor.gif?itemid=4514808", "https://media1.tenor.com/images/c10b4e9e6b6d2835b19f42cbdd276774/tenor.gif?itemid=10644609", "https://media1.tenor.com/images/51a659cee3d3d2b1d59014d967aafdc1/tenor.gif?itemid=5414301", "https://media1.tenor.com/images/c9b0d63b51a661859f3d4c19fe0fc1ac/tenor.gif?itemid=7302787"
    ];
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading the Command, Please Wait.,,,,")

    message.channel.send(embed).then(message => {
        embed.setColor("#000FF")
        embed.setDescription(`${usernameid} Has Given a Cookie to ${cUser}:cookie::yum::cookie:`)
        embed.setImage(replies[result])
        embed.setFooter("Command Ran By: " + usernameid.username, userURL)
        message.edit(embed)
    })
}
module.exports.help = {
    name: "cookie",
    names: "Cookie"
}