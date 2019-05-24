const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let roleName = args.join(' ')
    if (!roleName) return message.channel.send(`Please Provide a role name to search!`)
    let membersWithRole = message.guild.members.filter(member => {
        return member.roles.find(r => r.name === roleName);
    }).map(member => { return member.user; })
    if (membersWithRole.length === 0) return message.channel.send(`No one in that role, or that role doesn't exist`)
    if (!membersWithRole) return message.channel.send(`Nothing for ${args.join(' ')}`)
    let embed = new Discord.RichEmbed()
        .setTitle(`Users With the **${roleName}** Role`)
        .setDescription(`${membersWithRole.join('\n')}`)
        .setColor(`RANDOM`)
    message.channel.send(embed)
}
module.exports.help = {
    name: "members",
    names: "Members"
}