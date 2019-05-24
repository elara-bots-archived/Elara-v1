const Discord = require('discord.js');
const morse = require('morse-node').create('ITU');
module.exports.run = async (bot, message, args) => {
    const translated = morse.encode(args.join(' '));
    const embed = new Discord.RichEmbed()
        .setColor('0x0000FF')
        .setTitle('Morse Code Translator')
        .addField('📥 Original 📥', args.join(' '), false)
        .addField('📤 Morse Code 📤', translated, false)
        .setTimestamp();
    message.channel.send(embed);
}
module.exports.help = {
    name: "morse",
    names: "Morse"
}