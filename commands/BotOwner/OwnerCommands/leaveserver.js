const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return bot.users.get("288450828837322764").send(`${message.author.username} Has Tried to use the Leave Server Command.`).catch(() => console.error('I couldnt send the PM to the user.'));
    bot.guilds.find('id', `${args[0]}`).owner.send(`The Bot has been removed from your server by the Bot Owner, for more information please contact (SUPERCHIEFYT#0001)`)
    await bot.guilds.find('id', `${args[0]}`).leave()
}
module.exports.help = {
    name: "leaveserver",
    names: "LeaveServer"
}
