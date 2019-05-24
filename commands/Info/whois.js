const Discord = require("discord.js");
const moment = require('moment-timezone');
module.exports.run = async (bot, message, args) => {
 try{   let user;
    // If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    // Define the user of a guild.
    const rmember = message.guild.member(user);
        let botembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setThumbnail(rmember.user.avatarURL || rmember.user.defaultAvatarURL)
        .addField("Name", rmember.user, true)
        .addField(`Nickname`, rmember.nickname ? rmember.nickname : 'No Nickname', true)
        .addField(`Bot`, rmember.user.bot ? 'Yes' : 'No', true)
        .addField(`Tag`, rmember.user.tag, true)
        .addField("User ID", rmember.id, true)
        .addField(`Nitro/Partner`, `${rmember.user.avatar.startsWith('a_') ? 'Has Nitro or Partner' : 'Regular User'}`, true)
        .addField(`Avatar Url`, `[Click Here](${rmember.user.avatarURL || rmember.user.defaultAvatarURL })`, true)
        .addField(`Account Creation:`, `${moment(rmember.user.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a zz')}`)
        .addField(`Joined Server At:`, `${moment(rmember.joinedAt).format('dddd, MMMM Do YYYY, h:mm:ss a zz') }`)
        .addField("Status", rmember.presence.status.toUpperCase(), true)
        .addField(`Game`, rmember.presence.game ? rmember.presence.game.name: 'N/A', true)
        .addField(`Roles [${rmember.roles.size}]`, `${rmember.roles.sort((b, a) => { return a.position - b.position}).map(role => `${role}`).join(" | ")}`)
        .setTimestamp()
    message.channel.send(botembed)
}catch (e) {
    message.channel.send(`ERROR\nIf you have a default avatar this error will show, working on fixing this error.`)
}
}
module.exports.help = {
    name: "whois",
    names: "userinfo"
};