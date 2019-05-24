const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let cantembed = new Discord.RichEmbed()
    .setDescription(`:x: Can't Find the User to Kick :x:`)
    .setTimestamp()
    .setColor(`#FF0000`)
    .setFooter(`Command Ran By: ${message.author.username}`, message.author.avatarURL)
    if (!kUser) return message.channel.send(cantembed);
    let kReason = args.join(" ").slice(22);
    let noreasonembed = new Discord.RichEmbed()
        .setDescription(`:x: You need to provide a reason for the Kick. :x:`)
        .setTimestamp()
        .setColor(`#FF0000`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.avatarURL)
    if (!kReason) return message.channel.send(noreasonembed)
    let nopermembed = new Discord.RichEmbed()
        .setDescription(`:x: Sorry but you need to have the Kick Members Permissions to use this command! :x:`)
        .setTimestamp()
        .setColor(`#FF0000`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.avatarURL)
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(nopermembed);
    let nokickembed = new Discord.RichEmbed()
        .setDescription(`:x: Sorry but i can't kick this user, they are a **Moderator/Admin** :x:`)
        .setTimestamp()
        .setColor(`#FF0000`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.avatarURL)
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nokickembed);
    let kickedembed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setDescription(`You have been Kicked From ${message.guild.name} For ${kReason}`)
        .setTimestamp()
        .setFooter(`Server Name: ${message.guild.name}`, message.guild.iconURL)
    let kickEmbed = new Discord.RichEmbed()
        .setDescription("Member Kicked")
        .setColor("#0011FF")
        .addField("Kicked User", `${kUser}`, true)
        .addField("Moderator", `<@${message.author.id}>`, true)
        .addField("Reason for the Kick", kReason)
    kUser.send(kickedembed);
    let kickChannel = message.guild.channels.find(c => c.name === "modlogs") || message.guild.channels.find(c => c.name === "bot-hell")
    if (!kickChannel) return message.channel.send("Can't find The modlogs channel To Log in.");

    message.channel.send(`${kUser} Has been Kicked from the Server`);
    kickChannel.send(kickEmbed);
    await message.guild.member(kUser).kick(kReason);
    message.delete().catch();
}

module.exports.help = {
    name: "kick",
    names: "Kick"
}