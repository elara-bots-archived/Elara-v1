const figlet = require('figlet');
module.exports.run = async (bot, message, args) => {
if(!args.join(' ')) return message.channel.send(`You need to provide text!`);
figlet(args.join(' '), (err, data) => {
    message.channel.send(data, {
        code: 'ascii'
    })
})
}
module.exports.help = { 
    name: "ascii",
    names: 'Ascii'
}