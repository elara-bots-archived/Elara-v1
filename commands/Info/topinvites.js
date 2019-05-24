const Discord = require('discord.js'),
    arraySort = require('array-sort'),
    table = require('table'); 
module.exports.run = async (bot, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    })
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = [['User', 'Uses']]; 
    invites.forEach(function (invite) {
        possibleInvites.push([invite.inviter.username, invite.uses]);
    })
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Leaderboard', `${table.table(possibleInvites)}`);
    message.channel.send(embed)
}
module.exports.help = {
    name: "topinvites",
    names: "TopInvites"
}