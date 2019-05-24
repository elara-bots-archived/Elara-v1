const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let cantembed = new Discord.RichEmbed()
        .setDescription(`:x: Can't Find the User to SoftBan :x:`)
        .setTimestamp()
        .setColor(`#FF0000`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.avatarURL)
    if (!bUser) return message.channel.send(cantembed);
    let bReason = args.join(" ").slice(22);
    let noreasonembed = new Discord.RichEmbed()
        .setDescription(`:x: You need to provide a reason for the SoftBan. :x:`)
        .setTimestamp()
        .setColor(`#FF0000`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.avatarURL)
    if (!bReason) return message.channel.send(noreasonembed)
    let nopermembed = new Discord.RichEmbed()
        .setDescription(`:x: Sorry but you need to have the Ban Permissions to use this command! :x:`)
        .setTimestamp()
        .setColor(`#FF0000`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.avatarURL)
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(nopermembed);
    let nobanembed = new Discord.RichEmbed()
        .setDescription(`:x: Sorry but i can't SoftBan this user, they are a **Moderator/Admin** :x:`)
        .setTimestamp()
        .setColor(`#FF0000`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.avatarURL)
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nobanembed);
    let softbanembed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setDescription(`You have been SoftBanned From ${message.guild.name} For ${bReason}`)
        .setTimestamp()
        .setFooter(`Server Name: ${message.guild.name}`, message.guild.iconURL)
    let banEmbed = new Discord.RichEmbed()
        .setDescription("Member SoftBanned")
        .setColor("#0011FF")
        .addField("Kicked User", `${bUser}`, true)
        .addField("Moderator", `<@${message.author.id}>`, true)
        .addField("Reason for the SoftBan", bReason)
    bUser.send(softbanembed);
    let incidentchannel = message.guild.channels.find(`name`, "modlogs");
    if (!incidentchannel) return message.channel.send("Can't find the channel To Log in.");

    message.guild.member(bUser).ban(bReason);
    message.guild.unban(bUser.id)
    incidentchannel.send(banEmbed);
    message.delete().catch();
}

module.exports.help = {
    name: "softban",
    names: "Softban"
}