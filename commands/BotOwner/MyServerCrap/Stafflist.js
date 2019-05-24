const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("Sorry But this is a Bot Owner Only Command.");
    let VaLembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setThumbnail(message.guild.iconURL)
        .setDescription("The Current Staff list")
        .setURL("https://discord.gg/hgsM86w")
        .addField("Owner [1]","_ _ <@288450828837322764>")
        .addField("Co Owners [3]","_ _<@253667774306582529> \n <@303789586151112704> \n <@368775528234352642>")
        .addField("Admins [6]","_ _<@330752829859954698> \n <@285663216770744321> \n <@84655713216892928> \n <@298201869585612810> \n <@267776254743150602> \n <@390109833317056514> ")
        .addField("Moderators [5]", "_ _<@421033482752360448> \n <@298617900216877057> \n <@283311727477784576> \n <@244271175608303616> \n <@203259894743302145>")
        .setTitle("The Current Staff in SUPERCHIEFYT's Discord")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445651959605624832/pizap.png");



    message.channel.send(VaLembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Staff",
    names: "staff"

}