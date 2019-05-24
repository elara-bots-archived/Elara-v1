module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return;
    let rUser = message.mentions.users.first() || message.guild.members.get(args[0])
    let reason = args.slice(1).join(' ');
    rUser.send(reason);
}
module.exports.help = {
    name: "dm",
    names: "Dm"
}
