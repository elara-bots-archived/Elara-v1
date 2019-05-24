const Discord = require("discord.js");
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
module.exports.run = async (bot, message, args) => {
    let verifLevels = ["None", "Low\nmust have verified\nemail on account", "Medium - must be registered on Discord for longer than 5 minutes", "High -  (╯°□°）╯︵ ┻━┻ - must be a member of the server for longer than 10 minutes", "Very High - ┻━┻ミヽ(ಠ益ಠ)ﾉ彡┻━┻ - must have a verified phone number"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };
    let serverSize = message.guild.memberCount;
    let botCount = message.guild.members.filter(m => m.user.bot).size;
    let humanCount = serverSize - botCount;
    let sIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
        .setTitle("Server Information")
        .setColor("#000FF")
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
        .addField(`Server Name`, message.guild.name, true)
        .addField(`Server ID`, message.guild.id, true)
        .addField("Server Owner", `<@${message.guild.owner.user.id}>`, true)
        .addField(`Partnered`, `${message.guild.features.length === 0 ? 'No' : `Yes, features: ${message.guild.features.map(feature => `\`${feature}\``).join(', ')}`}`, true)
        .addField("Created", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
        .setThumbnail(sIcon)
        .addField("Region", region[message.guild.region], true)
        .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
        .setTimestamp()
        .addField("Total Members", message.guild.memberCount, true)
        .addField("Total Channels", message.guild.channels.size, true)
        .addField("Total Roles", message.guild.roles.size, true)
        .addField("Total Bots", botCount, true)
        .addField("Total Humans", humanCount, true)
        .addField(`Member Status`, `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible`, true)
        .addField("Server Roles", `Type **e!roles** to see \nthe Server roles`, true)
        .addField("Server Emojis", `Type **e!emojis** to see \nthe Servers Emojis`, true)
        .addField("Server Channels", 'Type **e!channels** to see \nthe Servers Channels', true)
        .setAuthor(`${message.guild.name}`, sIcon);
    message.channel.startTyping();
    message.channel.send(serverEmbed);
    await message.channel.stopTyping();
}

module.exports.help = {
    name: "serverinfo",
    names: "Serverinfo"
}