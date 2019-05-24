const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    const modlogs = message.guild.channels.find('name', 'modlogs');
    let moderatorname = `<@${message.author.id}>`
    if(!modlogs) return message.channel.send("Can't find **modlogs**");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but i can't mute Mods/Admins!");
    let muterole = message.guild.roles.find(`name`, `Muted`);
    let reason = args[2];
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: `Muted`,
                color: "#FF0000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if (!mutetime) return message.reply("You didn't specify a time!");

    await (tomute.addRole(muterole.id));
    let botembed = new Discord.RichEmbed()
    .setColor("#000FF")
    .setAuthor(`${tomute.user.username}`, `${tomute.user.avatarURL}`)
    .setDescription(`Mute | ${tomute.user.tag} `)
    .addField("Moderator", moderatorname, true)
    .addField("User Muted",`<@${tomute.id}>`, true)
    .addField("Time", `${ms(ms(mutetime))}`, true)
    .addField(`Reason`, `${reason}`)
    .setTimestamp()
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    modlogs.send(botembed)
    message.channel.send(`✅ ***${tomute.user.tag} Has Been Muted!***`);

    setTimeout(function () {
        let unmuteembed = new Discord.RichEmbed()
        .setColor(`#FF000`)
        .setDescription(`Unmute | ${tomute.user.tag}`)
        .addField(`Moderator`, `${moderatorname}`, true)
        .addField(`User Unmuted`, `<@${tomute.id}>`, true)
        .addField(`Reason`, `Auto`, true)
        .setTimestamp()
        .setFooter(`ID: ${tomute.id}`, `${tomute.user.avatarURL}`)
        tomute.removeRole(muterole.id);
        modlogs.send(unmuteembed);
    }, ms(mutetime));
    message.delete().catch();

    const dmembed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setDescription(`You have been Muted in **${message.guild.name}**`)
    .addField(`Time`, `${ms(ms(mutetime))}`)
    .addField(`Reason`, `${reason}`)
    tomute.send(`<@${tomute.id}>`)
    await tomute.send(dmembed)


}


module.exports.help = {
    name: "mute",
    names: "Mute"
}