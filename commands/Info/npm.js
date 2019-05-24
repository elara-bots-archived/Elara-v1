const Discord = require('discord.js');
const snekfetch = require("snekfetch");
const humanizeduration = require("humanize-duration");
module.exports.run = async (bot, message, args) => {
    if (args.length > 0) {
        snekfetch.get("https://skimdb.npmjs.com/registry/" + args.join(' ').toLowerCase()).then((body) => {
            if (!body) return message.channel.send(`Nothing for ${args.join(' ')}`)
            let embed = new Discord.RichEmbed()
                .setThumbnail(`https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/npm/npm.png`)
                .setColor(`RANDOM`)
                .setTitle(`NPM Package **${body.body.name}**`)
                .setAuthor(`Author: ${body.body.author.name}`)
                .addField(`Name`, body.body.name, true)
                .addField(`Download`, `**[npm i ${body.body.name}](https://www.npmjs.com/package/${args.join(' ').toLowerCase()})**`, true)
                .addField(`Description`, body.body.description, true)
                .addField(`Latest`, body.body["dist-tags"].latest, true)
                .addField(`Maintainers`, body.body.maintainers.map((m) => m.name).join(", "), true)
                .addField(`Last Updated`, humanizeduration(Date.now() - new Date(body.body.time[body.body["dist-tags"].latest]).getTime(), { round: true, largest: 2 }), true)
                .addField(`Github`, `[**Click Here**](${((body.body.repository) ? body.body.repository.url.replace("git+", "").replace(".git", "").replace("git://", "https://").replace("git@github.com:", "https://github.com/") : "No Repository")})`, true)
            message.channel.send(embed)
        })
    }
}
module.exports.help = {
    name: "npm",
    names: "NPM"
}