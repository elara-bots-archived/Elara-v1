const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {
    msg.channel.send(`:game_die: **${msg.author.username}**, you rolled a **${Math.floor(Math.random() * 6) + 1}**!`);
}
module.exports.help = {
    name: "roll",
    name: "Roll"
}