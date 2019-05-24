const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let apiKey = process.env.WEATHERAPI;
    const fetch = require('node-fetch');
    let arg = message.content.split(" ").join(" ").slice(10);
    if (!arg) {
        return message.reply('I need a City to Check :wink:');
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + arg + `&APPID=` + apiKey + `&units=metric`)
    .then(res =>{
        return res.json();
    }).then(json =>{
        if (json.main === undefined) {
            return message.reply(`**${arg}** Isn't a City/Place`);
        }
    let embed = new Discord.RichEmbed()
    .setColor("#000FF")
    .setTitle(`This is the Weather For :flag_${json.sys.country.toLowerCase()}: ${json.name}`)
    .addField(`Temp:`, `${json.main.temp}°C`, true)
    .addField("WindSpeed", `${json.wind.speed}MPH`, true)
    .addField("Humidity", `${json.main.humidity}%`, true)
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send({embed})
    .catch(console.error);
}).catch(err => {
    if (err) {
        message.channel.send('Something is wrong with the API, Please Contact <@288450828837322764>');
    }
});
};
module.exports.help = {
    name: "weather",
    names: "Weather"
}