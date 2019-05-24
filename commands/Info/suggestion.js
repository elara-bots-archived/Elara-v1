const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let suggestuser = message.author.username;
    let suggestuserurl = message.author.avatarURL;
let guild = message.guild;
let suggestchannel = message.guild.channels.find(c => c.name === "suggestions");
    if (!suggestchannel) return message.guild.createChannel('suggestions', 'text');

    let newsuggestion = args.join(" ");
    const embed = new Discord.RichEmbed()
    .setColor(`#000FF`)
    .setAuthor(`Suggested By: ${suggestuser}`, `${suggestuserurl}`)
    .setDescription(newsuggestion)
    suggestchannel.send(embed).then( message => {
        message.react("✅")
        message.react("❌")
    });
    message.delete().catch();
}
module.exports.help = {
    name: "suggest",
    names: "Suggest"
}