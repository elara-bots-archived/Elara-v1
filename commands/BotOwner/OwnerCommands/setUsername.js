const Discord = require("discord.js");
const config = require('../../../config.js')
module.exports.run = async (bot, message, args) => {
    try {
        if (message.author.id !== "288450828837322764") return message.react(`❌`);
        let oldbotname = bot.user.username;
        let logchannel = bot.channels.get(process.env.LOGCHANNEL) || bot.channels.get(config.logchannel)
        let newbotname = args.join(" ");
        bot.user.setUsername(newbotname);
        await message.react(`476629550797684736`)
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(`Username Changed!`)
            .addField(`Old Username`, oldbotname, true)
            .addField(`New Username`, newbotname, true)
        logchannel.send(embed)
    } catch (e) {
        message.channel.send(`ERROR:\n${e}`)
    }
}

module.exports.help = {
    name: "setname",
    names: "SN"
}