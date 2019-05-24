const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#000FF`)
.setTimestamp()
.setFooter(`Command Ran By: ${message.author.tag}`, message.author.avatarURL)
.setTitle(`Bot Tutorial Series, For **discord.js** and **node.js**`)
.addField(`{The Source Code}`, `[Youtube Channel](https://www.youtube.com/channel/UCNXt2MrZaqfIBknamqwzeXA)\n[Bot Series](https://www.youtube.com/watch?v=Z-tc91hArlM&list=PLdnyVeMcpY7-GfaXaWBOb3ZQkJxP53BIx)\n[Discord Server](https://discord.gg/w24CQMR)`, true)
.addField(`An Idiots Guide`, `[Youtube Channel](https://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA)\n[Bot Series](https://www.youtube.com/watch?v=rVfjZrqoQ7o&list=PLR2_rarYLHfg6ZJqq0WTMmI9uLcd7_GRO)\n[Discord Server](https://discord.gg/4NE4bk7)`, true)
message.channel.send(embed)
}
module.exports.help = {
    name: "bothelp",
    names: "Bothelp"
}