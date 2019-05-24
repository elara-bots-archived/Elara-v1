const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {
  try {  
      var options = {
        maxAge: 0
    };
    const useruser = "Command Ran By: " + message.author.username;
    const usermade = message.author;
    const userurl = message.author.avatarURL;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`<a:Dots:426956230582599690> Creating......`)
        .setTimestamp()
        message.delete(15000).catch()
    message.channel.send(botembed).then(message => {
    message.channel.createInvite(options).then(i => {
        botembed.setColor("#000FF")
        botembed.setFooter(`This message will delete in 15 Seconds.`)
        botembed.setDescription(`Created a Invite For you ${usermade}. \n https://discord.gg/${i.code}`)
        botembed.setAuthor(useruser, userurl)
        botembed.setTimestamp()
        message.edit(botembed).then(message => {
            message.delete(15000).catch()
        })
    
        })
    }) } catch (e) {
        message.channel.send(`ERROR\n**${e}**`)
    }
}
module.exports.help = {
    name: "invite",
    names: "Invite"
}