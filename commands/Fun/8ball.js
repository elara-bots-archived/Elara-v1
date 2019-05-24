const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("Please ask a full question!");
    let replies = ["Yes.", "No", "I don't know", "Ask Again Later"];
    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");
    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#000FF")
    .addField("Question", question)
    .addField("Answer", replies[result]);
    message.channel.send(ballembed);

}


module.exports.help = {
    name: "8ball",
    names: "8B"
}