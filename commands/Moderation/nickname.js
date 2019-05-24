module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`Sorry ${message.author} But you don't have the Manage Nicknames Permission!`)
    let rUser = message.mentions.members.first() || message.author;
    let newnick = args.join(' ').slice(22);
        rUser.setNickname(newnick);
        message.channel.send(`${rUser}'s Nickname has been Changed.`)
}

module.exports.help = {
    name: "nick",
    names: "Nick"
}