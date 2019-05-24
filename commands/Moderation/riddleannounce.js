module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Sorry but you can't use this command!`)
    let riddleannounce = message.guild.channels.find(c => c.name === "❔weekly-riddle-ask") || message.guild.channels.find(c => c.name === "weekly-riddle-ask")
    if (!riddleannounce) return message.channel.send(`Can't find the **weekly-riddle-ask** Channel!`)
    riddleannounce.send(args.join(' '))
    await message.reply(`✅ Sent the message in ${riddleannounce} Channel`)
}
module.exports.help = {
    name: "riddle",
    names: "Riddle"
}