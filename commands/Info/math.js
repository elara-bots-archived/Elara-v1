const Discord = require('discord.js');
const math = require('mathjs');
module.exports.run = async (bot, message, args) => {
 if(!args[0])return message.channel.send(`Please Input a Calculation!`)
 let resp;
 try {
     resp = math.eval(args.join(' '));
 }catch(e) {
     return message.channel.send(`Sorry, Please Input a Valid Calculation!`)
 }
 const embed = new Discord.RichEmbed()
 .setColor(`RANDOM`)
 .setTitle(`Math Calculation`)
 .addField(`Input`, `\`\`\`\js\n${args.join('')}\`\`\``)
 .addField(`Output`, `\`\`\`js\n${resp}\`\`\``)
 message.channel.send(embed)
}
module.exports.help = {
    name: "math",
    names: "Math"
}