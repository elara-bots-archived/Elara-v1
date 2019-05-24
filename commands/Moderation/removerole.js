const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`Sorry but you don't have the **Manage Roles** Permission! ${message.author}`);
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.send("Couldn't find that user, Please check again..");
    let role = args.slice(1).join(" ");
    if (!role) return message.channel.send("Please Provide a Valid Role.");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.channel.send("Couldn't find that role in the server.");

    if (!rMember.roles.has(gRole.id)) return message.channel.send("That user don't have that role.");
    await (rMember.removeRole(gRole.id));

    try {
        await rMember.send(`You have been removed from the **${gRole.name}** by: ${message.author}`)
    } catch (e) {
        message.channel.send(`${rMember}, Sorry but you was removed from ${gRole.name} role I've Tried Dming the <@${rMember.id}> but their Dms are Closed.`)
    }
    message.delete().catch();
}

module.exports.help = {
    name: "removerole",
    names: "role-"
}