const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports.run = async (bot, message, args) => {
    if(!message.channel.nsfw) return;
    const subreddits = [
        "meme",
        "memes"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor(`#FF000`)
                .setDescription(`<a:Dots:426956230582599690> Loading......`)
            message.channel.send(embed).then(message => {
                embed.setColor(`#000FF`)
                embed.setDescription(`Found one! [Click Here](${url})`)
                embed.setImage(url)
                message.edit(embed);
            })
        })
}
module.exports.help = {
    name: "meme",
    names: "Meme"
}