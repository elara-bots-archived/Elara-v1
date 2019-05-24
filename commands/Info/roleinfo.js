const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = args.join(' ')
    let role = message.guild.roles.find("name", user) || message.guild.roles.find("id", user);
    let hex = role.hexColor.toString().slice(1)

    if (!role) { return message.channel.send("Looks like I can't find the role. My searchs are case-sensitive so please check before retyping."); }
    let embed = new Discord.RichEmbed()
        .setThumbnail(`http://colorhexa.com/${hex}.png`)
        .addField("Role Name", role.name, true)
        .addField(`Role ID`, role.id, true)
        .addField(`Role Tag`, role, true)
        .addField(`Role Mention`, "``" + role + "``", true)
        .addField(`Role Hoisted`, role.hoist, true)
        .addField(`Role Mentionable`, role.mentionable, true)
        .addField(`Role Editable`, role.editable, true)
        .setColor(role.hexColor)
        .addField("Position", role.position, true)
        .addField("Hex Color", role.hexColor, true)
        .addField("Users", role.members.size, true)
        .addField(`Role Permissions`, `[Click Here](https://discordapi.com/permissions.html#${role.permissions})`, true)
        .setFooter(`Role Created`)
        .setTimestamp(role.createdAt)
        message.channel.send(embed)
}
module.exports.help = {
    name: "roleinfo",
    names: "Roleinfo"
}