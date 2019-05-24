const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764" && message.author.id !== "391529339214364674") return message.react('482868924573155349')
try {
    let code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
   let cleanembed = new Discord.RichEmbed()
   .setColor("#000FF")
   .setDescription(("x1", clean(evaled)))
   message.channel.send(cleanembed);

} catch (err) {
    
    let botembed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setDescription(`\`ERROR\` \'\'\'x1\n${clean(err)}\n\`\'\``)
    message.channel.send(botembed);
}
}

function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}


module.exports.help = {
    name: "eval",
    names: "ev"
}