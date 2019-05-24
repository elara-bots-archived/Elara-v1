const Discord = require('discord.js');
const Client = require('fortnite');
const fortnite = new Client(process.env.FORTNITEAPI)
module.exports.run = async (bot, message, args) => {
    let username = args[0];
    let platform = args[1] || 'pc';
    if (!platform) return message.channel.send(`Please Provide a Platform! [e!fortnite username xbl or pc or psn]`)
    if (!username) return message.channel.send(`Please Provide a Username! [e!fortnite username xbl or pc or psn]`);
    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;
        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        let top3 = lifetime[1][`Top 3s`];
        let top6 = lifetime[2][`Top 6s`];
        let top10 = lifetime[3][`Top 10`];
        let top12 = lifetime[4][`Top 12s`]
        let top25 = lifetime[5][`Top 25s`];
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(data.username)
            .setDescription(`**LifeTime Stats** For [${data.username}](${data.URL})`)
            .addField(`Wins`, wins, true)
            .addField(`Kills`, kills, true)
            .addField(`Score`, score, true)
            .addField(`Matches Played`, mplayed, true)
            .addField(`Win Percentage`, winper, true)
            .addField(`Kill/Death Ratio`, kd, true)
            .addField(`Top 3`, top3, true)
            .addField(`Top 6`, top6, true)
            .addField(`Top 10`, top10, true)
            .addField(`Top 12`, top12, true)
            .addField(`Top 25`, top25, false)
            .setThumbnail(`https://pbs.twimg.com/profile_images/1017458813199372289/QtGv1tyn_400x400.jpg`)
        message.channel.send(embed)

    }).catch(error => {
        message.channel.send(`Nothing for that person.\nPlease make sure you are searching the right Platform/User\ne!fortnite **UsernameHere** Platformhere`);

    })
}
module.exports.help = {
    name: "fortnite",
    names: "Fortnite"
}