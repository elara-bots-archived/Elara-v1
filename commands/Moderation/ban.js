const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bUser) return message.channel.send("Couldn't Find the User to Ban them!!");
    let bReason = args.slice(1).join(" ");
    if(!bReason) bReason = "No Reason Provided"
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You Don't have the Ban permission to use this command.");
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be Banned!!");

    let banEmbed = new Discord.RichEmbed()
        .setDescription("Member Banned")
        .setColor("#FF0000")
        .addField("Banned User", `${bUser}`, true)
        .addField("Moderator", `<@${message.author.id}>`, true) 
        .addField("Reason For Ban", bReason)
        .setFooter(`${bUser.id}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/444028025932349441/445824989447323648/tenor_14.gif");

    let incidentchannel = message.guild.channels.find(`name`, "modlogs");
    if (!incidentchannel) return message.channel.send("Can't find the channel To Log in.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
    message.delete().catch();
}

module.exports.help = {
    name: "ban",
    names: "Ban"
}