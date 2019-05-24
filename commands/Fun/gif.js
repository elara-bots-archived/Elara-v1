const Discord = require('discord.js');
const superagent = require("superagent");
const api = "YOUR API KEY HERE";
module.exports.run = async (bot, message, args) => {
    let { body } = await superagent
        .get(`https://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}`, { json: true });
    if (!body) return message.channel.send(`API is broke contact the bot owners`)
    if (args.length < 1) return message.channel.send(`You need to search something!`);
    if (!body.data.image_url) return message.channel.send(`Nothing for that.`);
    message.channel.send(body.data.image_url)
}
module.exports.help = {
    name: "gif"
}
