const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Sorry pal, you can't do that.");
    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rMember) return message.reply("Sorry please check again i don't see that user.");
    let role = args.slice(1).join(" ");
    if (!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("Couldn't find that role.");

    if (rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
    await (rMember.addRole(gRole.id));

    try {
        await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
    } catch (e) {
        message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. I've Tried Dming the <@${rMember.id}> but their Dms are Closed.`)
    }
    message.delete().catch();

}

module.exports.help = {
    name: "addrole",
    names: "role+"
}