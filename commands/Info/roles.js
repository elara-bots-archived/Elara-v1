const Discord = require("discord.js");
const hastebin = require('hastebin-gen');
module.exports.run = async (bot, msg, args) => {
    if (msg.guild.roles.size === 0) {
        return msg.channel.send('There are no roles on this server.');
    }
    else if (msg.guild.roles.sort((b, a) => { return a.position - b.position }).map(role => `<@&${role.id}>`).join("\n").length > 2000) {
        let rolenumber = msg.guild.roles.size;
        let s = msg.guild.roles.sort((b, a) => { return a.position - b.position }).map(role => `Mention: <@&${role.id}>, Name <${role.name}> ID: <${role.id}>`).join("\n")
        let i = Math.ceil(s.length / 2);
        let partOne = s.slice(0, i).trim();
        let partTwo = s.slice(i + 1, s.length).trim();
        hastebin(partOne + partTwo, "js").then(r => {
            var hastLink = r
            const hastEmb = new Discord.RichEmbed()
                .setColor(`RANDOM`)
                .setTitle(`To Many Roles in the Server here is a Link to see all of the roles\nCurrently [${rolenumber}] Roles in the Server`)
                .addField('Link: ', `${hastLink}`)
            msg.channel.send({ embed: hastEmb })
        }).catch(console.error);
    }
    else {
        let rolenumber = msg.guild.roles.size;
        let embed = new Discord.RichEmbed()
            .setColor(`#FF000`)
            .setTitle(`Current Server Roles [${rolenumber}]`)
            .setDescription(`${msg.guild.roles.sort((b, a) => { return a.position - b.position }).map(role => `${role}`).join(" \n ")}`)
        msg.channel.send(embed);
    }
}
module.exports.help = {
    name: "roles",
    names: "Roles"
}
