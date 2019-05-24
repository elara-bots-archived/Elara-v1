const Discord = require('discord.js')
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
module.exports.run = async (bot, message, args) => {
if (message.author.id !== "288450828837322764") return;
let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
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
let serverinfo = bot.guilds.get(args[0])
let serverSize = serverinfo.memberCount;
let botCount = serverinfo.members.filter(m => m.user.bot).size;
let humanCount = serverSize - botCount;
let sIcon = serverinfo.iconURL;
let serverEmbed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setColor("#000FF")
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    .addField(`Server Name`, serverinfo.name, true)
    .addField(`Server ID`, serverinfo.id, true)
    .addField("Server Owner", `<@${serverinfo.owner.user.id}>`, true)
    .addField(`Partnered`, `${serverinfo.features.length === 0 ? 'No' : `Yes, features: ${serverinfo.features.map(feature => `\`${feature}\``).join(', ')}`}`, true)
    .addField("Created", `${serverinfo.createdAt.toString().substr(0, 15)},\n${checkDays(serverinfo.createdAt)}`, true)
    .setThumbnail(sIcon)
    .addField("Region", region[serverinfo.region], true)
    .addField("Verification Level", verifLevels[serverinfo.verificationLevel], true)
    .setTimestamp()
    .addField("Total Members", serverinfo.memberCount, true)
    .addField("Total Channels", serverinfo.channels.size, true)
    .addField("Total Roles", serverinfo.roles.size, true)
    .addField("Total Bots", botCount, true)
    .addField("Total Humans", humanCount, true)
    .setAuthor(`${serverinfo.name}`, sIcon);
message.channel.send(serverEmbed);
}
module.exports.help = {
    name: "serverlookup"
}