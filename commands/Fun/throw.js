const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const throwuser = message.mentions.users.first() || message.author;
    let replies = [`Banana`, `Car`, `Truck`, `Hot Firemen`, `A Building`, 
    `SpongeBob`, 'Patrick', 'Nothing', 'Admins', 'Moderators', 'Staff Members', 
    'Black Hole', 'Scams' , `Love`, `Hate`, `iPhone`, `Brick`, `Bad Bots`, `Chair`, 
    `Lemons`, `Cake`, `Pringles`, `Gummy Bears`, `Bus`, `Train`, `Yourself`, `Knife`, `UR MOM`,
    `SUPERCHIEFYT`, `Babies`, `Chaz`, `VAL`, `SobSyphix`, `Cats`, `Dogs`, `Poop`, `Memes`, `Youtube Streamer`, `Twitch Streamer`,
    `CaittlinandPJ`, `PJ`, `Sirred90`, `Nev`
]
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`Threw **${replies[result]}** at **${throwuser.username}**`)
    message.channel.send(embed);
}
module.exports.help = {
    name: "throw"
}