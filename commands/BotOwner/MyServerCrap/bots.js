const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return;
    let bicon = ("https://cdn.discordapp.com/emojis/405944757869871105.gif?v=1");
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("!! IMPORTANT !!")
        .addField("Info", "Just a warning what happen's in the Support Bot's Discord Server's this staff and myself have no control over their rule's apply not our's")
        .setThumbnail(bicon)
    let bicon1 = ("https://cdn.discordapp.com/attachments/444028025932349441/444418519287857153/logo_color_light.png");
    let botembed1 = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Auttaja.", "https://bit.ly/2vnU2lH", true)
        .addField("How To Get To Auttaja's Website", "https://auttaja.io/", true)
        .addField("Auttaja's Support Discord.", "https://discord.gg/Wb52DJe", true)
        .setThumbnail(bicon1)
    let bicon2 = ("https://cdn.discordapp.com/avatars/289989751950409728/0f8d5ce21ca10de524f6c33c280f7756.png?size=2048");
    let botembed2 = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("Just some info this bot only Moderatates Photos and you can't control it besides with the channel permissions in the server.")
        .addField("How To Get Content Moderator.", "https://bit.ly/2HFY3HC", true)
        .addField("How To Get To Bot's site", "https://bit.ly/2vZCjRE", true)
        .setThumbnail(bicon2)
    let bicon3 = ("https://cdn.discordapp.com/avatars/418438671486681098/c09c727ded2fa1933ea85c81c128c17d.png?size=2048");
    let botembed3 = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Couchbot's Bot Link", "https://bit.ly/2qHLssi", true)
        .addField("Couchbot's Bot Commands", "https://bit.ly/2HHkUPQ", true)
        .addField("Couchbot's Support Discord.", "https://discord.gg/ADRpuJu", true)
        .addField("How To Get Couchbot", "https://bit.ly/2HyGrfY", true)
        .setThumbnail(bicon3)
    let bicon4 = ("https://cdn.discordapp.com/avatars/347378090399236096/cdacb7ecadba5177f2fda86128c5175e.png?size=2048");
    let botembed4 = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Dyno.", "https://bit.ly/2evtLX3", true)
        .addField("How To Get To Dyno's Admin Panel", "https://www.dynobot.net/", true)
        .addField("Dyno's Support Discord.", "https://discord.gg/Dyno", true)
        .addField("How To Get Dyno Premium", "https://www.patreon.com/dyno", true)
        .setThumbnail(bicon4)
    let bicon5 = ("https://cdn.discordapp.com/avatars/298822483060981760/c5f04275e99defe458fc7ebbef0d5e72.png?size=2048");
    let botembed5 = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Logger bot's.", "https://bit.ly/2voS0Si", true)
        .addField("How To Get To Logger bot's Website", "https://whatezlife.com/", true)
        .addField("Logger bot's Support Discord.", "https://discord.gg/dYmudv3", true)
        .setThumbnail(bicon5)
    let bicon6 = ("https://cdn.discordapp.com/avatars/159985870458322944/8c7187aa71f15ba271c85bfece9b067e.png?size=2048");
    let botembed6 = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get MEE6.", "https://bit.ly/2HHmXDt", true)
        .addField("How To Get To MEE6's Website", "https://mee6.xyz/servers", true)
        .addField("MEE6's Support Discord.", "https://discord.gg/MEE6", true)
        .setThumbnail(bicon6)
    let bicon7 = ("https://cdn.discordapp.com/avatars/293587362569519104/1ee1174ab578c31dc4c90dea8350ed3d.png?size=2048");
    let botembed7 = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Novabot.", "https://bit.ly/2HJUblY", true)
        .addField("How To Get To Novabot's Admin Panel", "https://bit.ly/2ETRuLv", true)
        .addField("Novabot's Support Discord.", "https://discord.gg/xDcqjCs", true)
        .setThumbnail(bicon7)
    let bicon8 = ("https://cdn.discordapp.com/attachments/444028025932349441/444418982716506112/2501400.gif");
    let botembed8 = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Rythm.", "https://bit.ly/2Jmtd3h", true)
        .addField("How To Get Rythm 2.", "https://bit.ly/2K10qBL", true)
        .addField("How To Get Rythm Canary.", "https://bit.ly/2Inm469", true)
        .addField("How To Get To Rythm's Website", "https://rythmbot.co/", true)
        .addField("Rythm's Support Discord.", "https://discord.gg/cf3tNMW", true)
        .setThumbnail(bicon8)
    let bicon9 = ("https://cdn.discordapp.com/avatars/172002275412279296/f5f65755f67ae1dc88d9bb271d0f5bef.png?size=2048");
    let botembed9 = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get Tatsumaki.", "https://bit.ly/2l52L2R", true)
        .addField("How To Get To Tatsumaki's Website", "https://tatsumaki.xyz/dashboard", true)
        .addField("Tatsumaki's Support Discord.", "https://discord.gg/Tatsumaki", true)
        .setThumbnail(bicon9)
    let bicon10 = ("https://cdn.discordapp.com/avatars/204255221017214977/a1f1318a1127b054bfffdeecaece5f15.png?size=2048");
    let botembed10 = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("How To Get the bot.", "https://bit.ly/2Hbk8K6", true)
        .addField("How To Get To the Website", "https://yagpdb.xyz/", true)
        .addField("The Bot Support Discord.", "https://discord.gg/GcpyYh3", true)
        .setThumbnail(bicon10)
    message.channel.send(botembed)
    message.channel.send(botembed1)
    message.channel.send(botembed2)
    message.channel.send(botembed3)
    message.channel.send(botembed4)
    message.channel.send(botembed5)
    message.channel.send(botembed6)
    message.channel.send(botembed7)
    message.channel.send(botembed8)
    message.channel.send(botembed9)
    message.channel.send(botembed10)
    message.channel.send(botembed)
    message.delete().catch();
}
module.exports.help = {
    name: "bots",
    names: "Bots"
}