const Discord = require("discord.js");
const config = require('../../config.js');
const hastebin = require('hastebin-gen')
module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => { string += `Server Name: (${guild.name})` + '\n'; })
    hastebin(string, "js").then(r => {
        var hastLink = r

        let botembed = new Discord.RichEmbed()
            .setDescription("[Bot Information](https://discord.gg/hgsM86w)")
            .setColor("#000FF")
            .setThumbnail(bicon)
            .addField("Prefixes", `${config.prefix}`)
            .addField("Mention", bot.user, true)
            .addField(`Name`, bot.user.username, true)
            .addField(`Tag`, `\`${bot.user}\``, true)
            .addField(`ID`, bot.user.id, true)
            .addField(`Discriminator`, `#${bot.user.discriminator}`, true)
            .addField("Created On", "**June 9th 2018**", true)
            .addField("Invite Link", `[Click Here](https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)`, true)
            .addField(`Discord Bots.org Profile`, `[Click Here](https://discordbots.org/bot/455166272339181589)`, true)
            .addField(`My Support Server`, `[Click Here](https://discord.gg/hgsM86w)`, true)
            .addField("Servers In", `[Click Here](${hastLink})`, true)
            .setFooter(`Creator of the Bot: ${bot.users.get(config.SC).tag}`, `${bot.users.get(config.SC).displayAvatarURL}`);
        message.channel.send(botembed);
    })
}

module.exports.help = {
    name: "botinfo",
    names: "info"
}