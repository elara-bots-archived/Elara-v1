const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    let { body } = await superagent
        .get(`https://random.dog/woof.json`);
        let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading the Command, Please Wait.,,,,")

        message.channel.send(embed).then(message => {
            embed.setColor("#000FF")
            embed.setDescription("Here's a Photo of a Dog 😊")
            embed.setImage(body.url)
            embed.setFooter("Command Ran By: " + usernameid, userURL)
            message.edit(embed)
        })
}

module.exports.help = {
    name: "dog",
    names: "Dog"
}