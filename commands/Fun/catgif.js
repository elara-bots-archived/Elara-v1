const Discord = require('discord.js');
const request = require('request');
// ==========================================================================================================================================
module.exports.run = async (bot, message, args) => {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    var r = request.get('http://thecatapi.com/api/images/get.php/gif.php?type=gif', function (err, res, body) {
        let image = r.uri.href;
        if(!image) return message.channel.send(`Couldn't find one :frowning:`);
        if (err) {
            const eembed = new Discord.RichEmbed()
            .setColor(`#FF0000`)
            .setDescription(`<a:alert:469566413410140173> The API Is Down or Messed up. Please Contact the Bot Owner! <@288450828837322764> [SUPERCHIEFYT#0001](https://discord.gg/hgsM86w)`)
            message.channel.send(eembed);
            return;
        }
        const embed = new Discord.RichEmbed()
            .setColor("#FF000")
            .setDescription("<a:Dots:426956230582599690> Loading....")
        message.channel.startTyping();
        message.channel.send(embed).then(message => {
            embed.setColor("#000FF")
            embed.setDescription(`Found One!`)
            embed.setImage(image)
            embed.setFooter("Command Ran By: " + usernameid, userURL)
            message.edit(embed)
            message.channel.stopTyping();
        })
    });
}
module.exports.help = {
    name: "catgif",
    names: "Catgif"
}
