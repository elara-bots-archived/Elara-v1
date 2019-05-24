module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry but you don't have the permissions to use this command.");
    let channels = message.mentions.channels.first() || message.guild.channels.get(args[0])
    if (!channels) channels = message.channel.send(args.join(' '))
    let botmessage = args.slice(1).join(" ");
    message.delete().catch();
    channels.send(botmessage);
}


module.exports.help = {
    name: "say",
    names: "Say"
}