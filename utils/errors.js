const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor("#000FF")
        .addField("Permission needed", perm);

    message.channel.send(embed).then(m => m.delete(50000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(botconfig.red)
        .setTitle("Error")
        .addField(`${user} has perms`, perms);

    message.channel.send(embed).then(m => m.delete(50000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor("#000FF");

    message.channel.send(embed).then(m => m.delete(50000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Could not find that user.")
        .setColor("#000FF");

    channel.send(embed).then(m => m.delete(50000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please supply a reason.")
        .setColor("#000FF");

    channel.send(embed).then(m => m.delete(50000));
}