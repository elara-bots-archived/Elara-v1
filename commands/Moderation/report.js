const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Couldn't find that user!");
    let reason = args.join(" ").slice(22);
    let servername = message.guild.name;
    let sIcon = message.guild.iconURL;
    let reportEmbed = new Discord.RichEmbed()
        .setTitle("User Report")
        .setColor("#2CE51A")
        .setThumbnail("https://cdn.discordapp.com/attachments/444028025932349441/445824984204705792/tenor_12.gif")
        .setFooter(`User Reported At`, sIcon)
        .setTimestamp()
        .addField("Reported User", `${rUser}`, true)
        .addField("Reported By", `${message.author}`, true)
        .addField("Reported in Channel:", message.channel)
        .addField("Reason", reason);

    let dmEmbed = new Discord.RichEmbed()
        .setTitle("Your Report")
        .setColor("#2CE51A")
        .addField("Reported By", `${message.author}`, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/434973905485037578/434976194622914561/user_report.gif")
        .addField("Reported User", `${rUser}`,true)
        .addField("Thank You", "Your Report has been given to the Moderators of the Server, They will get back to you shortly.")
    let rUserembed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setTitle(`You Have Been Reported To the Server Moderators`)
    .addField(`Server`, `${servername}`, true)
    .addField(`Reason`, `${reason}`)
    rUser.send(rUserembed);
    let reportschannel = message.guild.channels.find(c => c.name === "modlogs") || message.guild.channels.find(c => c.name === "bot-hell")
    if (!reportschannel) return message.channel.send("Couldn't find modlogs");
    message.delete().catch();
    reportschannel.send(reportEmbed);
    message.author.send(dmEmbed);
}
module.exports.help = {
    name: "report",
    names: "Report"
}