const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {
    let rps = ["**:moyai: rock**", "**:pencil: paper**", "**:scissors: scissors**"];
    function random() { return `${rps[Math.floor(Math.random() * rps.length)]}!` }
    let choice = args.join(" ").toLowerCase();
    if (choice === '') return msg.reply("Please specify either rock, paper or scissors.");
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return msg.reply(`Please specify either rock, paper or scissors. ${choice} isn't one of those :P`);
    msg.reply(random());
}
module.exports.help = {
    name: "rps",
    names: "RPS"
}