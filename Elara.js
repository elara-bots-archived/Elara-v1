//=============================================================================================================================================================================================
// Start of the bot requirements etc.

const config = require("./config.js");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 2;
bot.login(process.env.BOT_TOKEN);

// End of the Bot Requirements etc.
//=============================================================================================================================================================================================
// Start Of the bot.on Messages.

bot.on("ready", async () => {
    console.log(`${bot.user.username} Is Online and Serving: ${bot.guilds.size} Servers, ${bot.channels.size} Channels, ${bot.users.size} Users`);
    require('./playing.js')(bot)
});
bot.on(`disconnect`, () => {
    console.log(`${bot.user.username} Has Been Disconnected. At: ${new Date()}`);
});
bot.on('reconnecting', () => {
    const Discord = require('discord.js')
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setFooter(`Reconnected At`)
        .setDescription(`${bot.user} Has Successfully Reconnected!`)
    console.log(`${bot.user.username} Is Trying To Reconnect! At: ${new Date()}`);
    bot.channels.get('468372950266150916').send(embed);
    require('./playing.js')(bot)
});
bot.on('guildMemberUpdate', async (oldMember, newMember) => {
    let modlogs = oldMember.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    if (newMember.nickname === oldMember.nickname) return
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setAuthor(newMember.user.tag, newMember.user.avatarURL)
        .setThumbnail(newMember.user.avatarURL)
        .setTitle(`Nickname Changed`)
        .addField(`Old Nickname`, `${oldMember.nickname ? `${oldMember.nickname}` : `${oldMember.user.username}`}`)
        .addField(`New Nickname`, `${newMember.nickname ? `${newMember.nickname}` : `${newMember.user.username}`}`)
        .setTimestamp()
    modlogs.send(embed)
})
bot.on("emojiCreate", async (emoji, bot) => {
    let modlogs = emoji.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let embed = new Discord.RichEmbed()
        .setColor(`GREEN`)
        .setThumbnail(emoji.url)
        .setTitle(`New Emoji Created`)
        .setDescription(`Info`)
        .addField(`Name`, emoji.name, true)
        .addField(`ID`, emoji.id, true)
        .addField(`Emoji URL`, `[Click Here](${emoji.url})`, true)
        .addField(`Animated?`, emoji.animated, true)
        .setTimestamp(emoji.createdAt)
        .setFooter(`Emoji Created At`)
    modlogs.send(embed)
});
bot.on("emojiDelete", async (emoji, bot) => {
    let modlogs = emoji.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let embed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setThumbnail(emoji.url)
        .setTitle(`Emoji Deleted`)
        .setDescription(`Info`)
        .addField(`Name`, emoji.name, true)
        .addField(`ID`, emoji.id, true)
        .addField(`Emoji URL`, `[Click Here](${emoji.url})`, true)
        .addField(`Animated?`, emoji.animated, true)
        .setTimestamp(emoji.createdAt)
        .setFooter(`Emoji Deleted At`)
    modlogs.send(embed)
});
bot.on("emojiUpdate", async (oldEmoji, newEmoji) => {
    let modlogs = newEmoji.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let embed = new Discord.RichEmbed()
        .setColor(`PURPLE`)
        .setThumbnail(newEmoji.url)
        .setTitle(`Emoji Updated`)
        .setDescription(`Info`)
        .addField(`OldName`, oldEmoji.name, true)
        .addField(`NewName`, newEmoji.name, true)
        .addField(`ID`, newEmoji.id, true)
        .addField(`Emoji URL`, `[Click Here](${newEmoji.url})`, true)
        .addField(`Animated?`, newEmoji.animated, true)
        .setTimestamp(newEmoji.createdAt)
        .setFooter(`Emoji Updated At`)
    modlogs.send(embed)
});
bot.on("guildMemberAdd", async member => {
    let modlogs = member.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#1CFF00")
        .setAuthor('Member Joined', member.user.avatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .setThumbnail(member.user.avatarURL)
    await modlogs.send(botembed);

});
bot.on("guildMemberRemove", async member => {
    let modlogs = member.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Left', member.user.avatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .setThumbnail(member.user.avatarURL)
    modlogs.send(botembed);
});
bot.on(`guildBanAdd`, (guild, user) => {
    let modlogs = guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Banned', user.avatarURL)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        .setDescription(`${user} ${user.tag}`)
        .setThumbnail(user.avatarURL)
    modlogs.send(botembed);
});
bot.on(`guildBanRemove`, (guild, user) => {
    let modlogs = guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#12FF00")
        .setAuthor('Member Unbanned', user.avatarURL)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        .setDescription(`${user} ${user.tag}`)
        .setThumbnail(user.avatarURL)
    modlogs.send(botembed);
});
bot.on(`channelCreate`, async channel => {
    let guild = channel.guild;
    let modlogs = guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Channel Created', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name<#${channel.id}> (**${channel.name}**) \n ►Type **${channel.type}** \n ►ID **${channel.id}**`)
    await modlogs.send(botembed);
});
bot.on(`channelDelete`, channel => {
    let guild = channel.guild;
    let modlogs = guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Channel Deleted', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name **${channel.name}**\n ►Type **${channel.type}**\n ►ID ${channel.id}\n ►Position ${channel.position}`)
    modlogs.send(botembed);
});
bot.on('guildCreate', async guild => {
    require('./playing.js')(bot)
    const newserverembed = new Discord.RichEmbed()
        .setColor(`#FF000`)
        .setDescription(`Server Added`)
        .setThumbnail(guild.iconURL)
        .setTimestamp()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .addField(`Guild Name`, `${guild.name}`, true)
        .addField(`Guild ID`, `${guild.id}`, true)
        .addField(`Guild Owner`, `${guild.owner}`, true)
        .addField(`Guild Owner ID`, `${guild.ownerID}`, true)
        .addField(`Guild Member Count`, `${guild.memberCount}`, true)
        .addField(`Guild Server Region`, `${guild.region}`, true)
        .addField(`Guild Verification Level`, `${guild.verificationLevel}`, true)
    bot.channels.get('468372950266150916').send(newserverembed);
    bot.users.get('288450828837322764').send(newserverembed)

});
bot.on("guildDelete", async guild => {
    require('./playing.js')(bot)
    const Deletedserverembed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setColor(`#FF000`)
        .setDescription(`Server Removed`)
        .setThumbnail(guild.iconURL)
        .setTimestamp()
        .addField(`Guild Name`, `${guild.name}`, true)
        .addField(`Guild ID`, `${guild.id}`, true)
        .addField(`Guild Owner`, `${guild.owner}`, true)
        .addField(`Guild Owner ID`, `${guild.ownerID}`, true)
        .addField(`Guild Member Count`, `${guild.memberCount}`, true)
        .addField(`Guild Server Region`, `${guild.region}`, true)
        .addField(`Guild Verification Level`, `${guild.verificationLevel}`, true)
    bot.channels.get('468372950266150916').send(Deletedserverembed)
    bot.users.get('288450828837322764').send(Deletedserverembed)

});
bot.on(`messageDelete`, message => {
    if (message.author.bot) return;
    let modlogs = message.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTimestamp()
        .setAuthor(`Message Deleted By ${message.author.tag}`, `${message.author.avatarURL}`)
        .setFooter(`${bot.user.tag}`, `${bot.user.displayAvatarURL}`)
        .setDescription(`_ _►Content: **\`${message.cleanContent}\`** \n ►Channel: <#${message.channel.id}> \n ►Message ID: ${message.id}`)
    modlogs.send(botembed)
});
bot.on(`messageUpdate`, (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    let modlogs = oldMessage.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTimestamp()
        .setAuthor(`Message Updated By ${newMessage.author.tag}`, `${newMessage.author.avatarURL}`)
        .setFooter(`${bot.user.tag}`, `${bot.user.displayAvatarURL}`)
        .setDescription(`_ _►Content: \n ►Old Message **\`${oldMessage.cleanContent}\`** \n ►Update Message **\`${newMessage.cleanContent}\`** \n ►Channel <#${newMessage.channel.id}> \n ►Message ID ${newMessage.id}`)
    modlogs.send(botembed);
});
bot.on('roleCreate', role => {
    let guild = role.guild;
    let modlogs = guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Role Created', role.guild.iconURL)
        .setFooter(`${bot.user.tag}`, `${bot.user.avatarURL}`)
        .setTimestamp()
        .setDescription(`_ _►Name <@&${role.id}> (**${role.name}**)\n ►ID **${role.id}** \n ►Hex Color **${role.hexColor}** \n ►Hoisted ${role.hoist}`)
    modlogs.send(botembed);

});
bot.on('roleDelete', role => {
    let guild = role.guild;
    let modlogs = guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Role Deleted', role.guild.iconURL)
        .setFooter(`${bot.user.tag}`, `${bot.user.avatarURL}`)
        .setTimestamp()
        .setDescription(`_ _►Name **${role.name}** \n ►ID **${role.id}** \n ►Position **${role.position}** \n ►Hoisted **${role.hoist}** \n ►Mentionable **${role.mentionable}** \n ►Color **${role.hexColor}** \n ►Role Created At **${new Date(role.createdTimestamp)}**`)
    modlogs.send(botembed);

});

bot.on("message", async message => {
    let invites = ['discord.gg/', 'https://discord.gg/']
    if (invites.some(word => message.content.includes(word))) {
        if(message.guild.id !== "371105897570631691") return;
        if (message.author.bot) return;
        if (message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete().catch()
        message.author.send(`Posting a Invite in **${message.guild.name}** isn't allowed! [WARNING]`)
        message.channel.send(`${message.author} Stop Posting Discord Invites! **[WARNING]**`).then(message => {
            message.delete(10000).catch()
        })
    }
    const swearWords = ['shit', 'anal', 'ass', 'assbang', 'assbanged', 'assbangs', 'asses', 'assfuck', 'assfucker', 'assh0le', 'asshat', 'assho1e', 'asshole', 'assholes', 'assmaster', 'assmunch', 'asswipe', 'asswipes', 'b1tch', 'bastard', 'bastards', 'beardedclam', 'beastiality', 'beatch', 'beeyotch', 'beotch', 'biatch', 'bigtits', 'bitch', 'bitched', 'bitches', 'bitchy', 'blowjob', 'blowjobs', 'bollock', 'bollocks', 'bollok', 'boner', 'boners', 'boob', 'boobies', 'boobs', 'booby', 'bukkake', 'bullshit', 'bullshits', 'bullshitted', 'bullturds', 'bung', 'busty', 'buttfuck', 'buttfucker', 'buttplug', 'c.0.c.k', 'c.o.c.k.', 'c.u.n.t', 'c0ck', 'c-0-c-k', 'caca', 'cahone', 'cameltoe', 'carpetmuncher', 'cawk', 'cervix', 'chinc', 'chincs', 'chink', 'chode', 'cl1t', 'climax', 'clit', 'clitoris', 'clitorus', 'clits', 'clitty', 'cocain', 'cocaine', 'cock', 'c-o-c-k', 'cockblock', 'cockholster', 'cockknocker', 'cocks', 'cocksmoker', 'cocksucker', 'corksucker', 'crackwhore', 'cum', 'cummin', 'cumming', 'cumshot', 'cumshots', 'cumslut', 'cumstain', 'cunilingus', 'cunnilingus', 'cunny', 'cunt', 'c-u-n-t', 'cuntface', 'cunthunter', 'cuntlick', 'cuntlicker', 'cunts', 'd1ck', 'd1ld0', 'd1ldo', 'dick', 'dickbag', 'dickdipper', 'dickface', 'dickflipper', 'dickhead', 'dickheads', 'dickish', 'dick-ish', 'dickripper', 'dicksipper', 'dickweed', 'dickwhipper', 'dickzipper', 'dike', 'dildo', 'dildos', 'dipship', 'doggie-style', 'doggy-style', 'dumass', 'dumbass', 'dumbasses', 'f.u.c.k', 'fuck', 'f-u-c-k', 'fuckass', 'fucked', 'fucker', 'fuckface', 'fuckin', 'fucking', 'fucknugget', 'fucknut', 'fuckoff', 'fucks', 'fucktard', 'fuck-tard', 'fuckup', 'fuckwad', 'fuckwit', 'fudgepacker', 'fuk', 'fvck', 'fxck', 'gtfo', 'handjob', 'j3rk0ff', 'jackass', 'jackhole', 'jackoff', 'jerk0ff', 'jerkoff', 'jism', 'jiz', 'jizm', 'jizz', 'jizzed', 'motherfucka', 'motherfucker', 'motherfucking', 'mtherfucker', 'mthrfucker', 'mthrfucking', 'muthafuckaz', 'muthafucker', 'mutherfucker', 'mutherfucking', 'muthrfucking', 'nazi', 'nazism', 'negro', 'nigga', 'niggah', 'niggas', 'niggaz', 'nigger', 'niggers', 'niggle', 'niglet', 'pissed', 'pissoff', 'piss-off', 'porn', 'porno', 'pussies', 'pussy', 'pussypounder', 's.h.i.t.', 'sh1t', 's-h-1-t', 'shamedame', 's-h-i-t', 'shite', 'shiteater', 'shitface', 'shithead', 'shithole', 'shithouse', 'shits', 'shitt', 'shitted', 'shitter', 'shitty', 'shiz', 'slut', 'slutdumper', 'sluts', 'dicks'];
    if (swearWords.some(word => message.content.includes(word))) {
        if(message.guild.id !== "424200844666208265") return;
        if (message.author.bot) return;
        if (message.member.hasPermission('MANAGE_GUILD')) return;
        const modlogs = message.guild.channels.find(c => c.name === "modlogs")
        if (!modlogs) return console.log(`Can't find a Modlogs channel in ${message.guild.name}`);
        const Userembed = new Discord.RichEmbed()
            .setColor(`#FF0000`)
            .setDescription(`You said a Filtered Word in **${message.guild.name}** Watch your Language!\n**Server Moderators has been Notified. [WARNING]**`)
        const warnembed = new Discord.RichEmbed()
            .setColor(`#FF0000`)
            .setDescription(`Filtered Word was used`)
            .setFooter(`Filtered Word used at: `, message.author.avatarURL)
            .setTimestamp()
            .addField(`User`, `${message.author}\n(**${message.author.tag}**)`, true)
            .addField(`Channel`, `<#${message.channel.id}>\n${message.channel.name}`, true)
            .addField(`Content`, `${message.content}`)
        modlogs.send(warnembed)
        message.author.send(Userembed)
        message.delete().catch()
        message.channel.send(`${message.author} Has been warned Filtered Word. [WARNING]`).then(message => { message.delete(10000).catch() })
    }
    const dab = ['!dab', `!Dab`, `!DAb`, `!DAB`, `!dAB`, `<o/`]
    if(dab.some(word => message.content.includes(word))){
        message.channel.send(`<a:dab:448954506420682763>`)
    }
    if (message.channel.id === '455184204615909377') {
        message.react('👍')
        message.react('👎')
    }
    if (message.channel.id === "473574603374067732") {
        message.member.addRole(`474016263883194373`)
        message.delete().catch()
        let riddleanswers = message.guild.channels.find(c => c.name === "elara-log") || message.guild.channels.find(c => c.name === "🤖elara-log")
        let riddleembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setAuthor(`${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()
            .setFooter(`Riddle submitted at`)
            .setTitle(`Riddle submitted`)
            .setDescription(`${message.content}`)
        riddleanswers.send(riddleembed)
        let dmembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(`Your riddle answer has been submitted\nand Have been given the **Riddle Submitted** Role,\nWhich means you can't post another answer until next week`)
            .setTimestamp()
            .setFooter(`Answer Submitted At`)
            .setAuthor(message.author.tag, message.author.avatarURL)
        message.author.send(dmembed);
    }
    if (message.author.bot) return;
    let dmembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(`Hello ${message.author},\nMy Commands only work in Discord Channels!\n [My Support Server](https://discord.gg/hgsM86w)`)
    if (message.channel.type === "dm") return message.author.send(dmembed).then(message => {
        message.delete(10000).catch()
    })
    const prefixes = config.prefix
    let prefix = false;
    for (const thisPrefix of prefixes) {
        if (message.content.startsWith(thisPrefix)) prefix = thisPrefix;
    }
    if (!prefix) return;
    if (!message.content.startsWith(prefix)) return;
    if (cooldown.has(message.author.id)) {
        message.delete();
        return message.reply("You have to wait 5 seconds between commands.")
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        cooldown.add(message.author.id);
    }
    let ops = config.SC
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args, ops);

    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, cdseconds * 1000)

});
process.on('unhandledRejection', error => {
    console.error(`ERROR: \n${error}`);
});
// End of the bot.on Messages.
//==============================================================================================================================================================================================
// Start of Getting and Loading the Commands

fs.readdir("./commands/Fun", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Fun commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Fun/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});

fs.readdir("./commands/Info/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't Info find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Info/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
fs.readdir("./commands/Moderation/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Moderation commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Moderation/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
fs.readdir("./commands/BotOwner", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Bot Owner commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});

fs.readdir("./commands/BotOwner/Partners", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find BotOwner/Partners commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/Partners/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
fs.readdir("./commands/BotOwner/OwnerCommands", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find BotOwner/OwnerCommands commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/OwnerCommands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
fs.readdir("./commands/BotOwner/MyServerCrap", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find BotOwner/MyServerCrap commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/MyServerCrap/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
// End of Getting Commands.
//=============================================================================================================================================================================================