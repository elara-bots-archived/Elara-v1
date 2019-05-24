const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    let replies = [
        "https://cdn.discordapp.com/attachments/435253697103003650/455667153882972171/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/456266463934808065/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/456637561939427328/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/456826433713471488/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/457123309927268364/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/457123309927268364/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/457123326637244428/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/457532339095076865/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/458570467519889418/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/458606643505004544/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/458606714787332096/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/458615949181059082/image.jpg",
        "https://cdn.discordapp.com/attachments/435253697103003650/454562167773986816/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/454613269223833601/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/454613411217801217/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/454613687475634198/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/454855674615037962/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/455003163318157313/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/455028204810272769/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/455029424606281749/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/455032303102590986/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/455033357559136287/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/455223457635106816/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/455573291277615114/image.jpg",
        "https://cdn.discordapp.com/attachments/435253697103003650/450632909393625088/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/450936561094361088/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/451955927600594944/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/452116623957032980/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/452148971666800642/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/452380141264306196/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/452650731229675521/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/453071681716748288/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/454091171560423452/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/454101787406893066/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/454101844378255370/image.jpg", "https://cdn.discordapp.com/attachments/435253697103003650/454106851102031882/image.jpg",
        "https://cdn.discordapp.com/attachments/341108945408098306/479446478927167488/image.jpg","https://cdn.discordapp.com/attachments/341108945408098306/479446275775791115/image.jpg", "https://cdn.discordapp.com/attachments/341108945408098306/479446034138005510/image.jpg", "https://cdn.discordapp.com/attachments/341108945408098306/479445960011939861/image.jpg", "https://cdn.discordapp.com/attachments/341108945408098306/479445882891141140/image.jpg", "https://cdn.discordapp.com/attachments/341108945408098306/479445765312217090/image.jpg", "https://cdn.discordapp.com/attachments/341108945408098306/479445624433934336/image.jpg", "https://cdn.discordapp.com/attachments/341108945408098306/479445485560791070/image.jpg", "https://cdn.discordapp.com/attachments/341108945408098306/479445437636411392/image.jpg", "https://cdn.discordapp.com/attachments/341108945408098306/479445408532398099/image.jpg"
    ]
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading a PJ Photo, Please Wait.,,,,")

    message.channel.send(embed).then(message => {
        embed.setColor("#000FF")
        embed.setDescription("Here's a Photo of a PJ 😊")
        embed.setImage(replies[result])
        embed.setFooter("Command Ran By: " + usernameid, userURL)
        message.edit(embed)
    })
}
module.exports.help = {
    name: "PJ",
    names: "pj"
}