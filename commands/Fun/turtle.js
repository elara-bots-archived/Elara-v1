const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    let replies = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOx93C1emY1xSWdTWuA0siFPHjhjyn-zYEnOlCyQzhvYkG52prIA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOFataYoIiFdo2u6VlaMjkOlXzm-Le1w6GixKeaMP7IXtYLhDnQ", "http://pmdvod.nationalgeographic.com/NG_Video/595/319/4504517_098_05_TOS_thumbnail_640x360_636296259676.jpg", "https://static1.squarespace.com/static/5486159de4b074841b303621/t/5913a4de6a49634ba5568356/1511333220930/",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRabfJt2HWD2091vFU8N0lWTrOyuJdJPTjEkrfNjB6Y97Uol2G", "https://www.greenpeace.org/usa/wp-content/uploads/2015/06/GP0STOE1Z_Web_size.jpg", "https://c402277.ssl.cf1.rackcdn.com/photos/1257/images/hero_small/SeaTurtle-1600x600px.jpg?1345590072", "http://www.ourlivingcoast.com.au/wp-content/uploads/2015/09/Green-Turtle-free-web.jpg", "https://media.apnarm.net.au/media/images/2018/01/22/b881182678z1_20180122074537_000gicupq8f3-0-38el2jzu62hh7405np2_fct941x572_ct677x380.jpg", "https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247__340.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/9e/A_Tartaruga.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Shell_Games_%288375933995%29.jpg/1024px-Shell_Games_%288375933995%29.jpg", "http://r.ddmcdn.com/s_f/o_1/APL/uploads/2015/11/loggerhead-turtle-ARTICLE-PAGE.jpg", "http://www.jessicaleboart.com/wp-content/uploads/2017/04/seaturtle.png",
        "https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336__340.jpg", "https://hawaiianpaddlesports.com/wp-content/uploads/P4253358.jpg", "https://storage.googleapis.com/ahead4-thegreatprojects/image-cache/l/e/a/r/n/learn-a-little-more-about-the-7-species-of-sea-turtle-4348-830x460.jpeg", "http://www.abc.net.au/news/image/351352-3x2-940x627.jpg", "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/AusGeo/2013/09/11/7110/green-turtle-sea-turtle.jpg", "https://www.thebeach-tulum.com/wp-content/uploads/2017/10/turtles-lara.jpg", "http://www.fitzroyisland.com/wp-content/uploads/2017/07/Where-To-See-Turtles-In-Australia.jpg", "http://ksoo.com/files/2017/08/Pet-Turtle.jpg", "https://cf.ltkcdn.net/small-pets/images/std/215635-672x450-Little-turtle.jpg", "https://www.jcu.edu.au/__data/assets/image/0010/305767/varieties/newsdetails.jpg",
        "https://www.sciencephoto.com/image/378877/large/Z7520224-Loggerhead_Sea_Turtle-SPL.jpg", "https://oceana.org/sites/default/files/styles/lightbox_full/public/1000x717-loggerhead_sea_turtle.jpg?itok=XM-rZdLj", "https://d3i6fh83elv35t.cloudfront.net/static/2017/11/4934015500_711809ea1e_b-1024x747.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTaat4koTDKJW_NKrvRDJkizhRAvv-upA5WIwvcNFAOFIs8ddp", "https://www.wur.nl/upload_mm/1/7/0/ef1d8bb8-da7f-48b4-8df3-5f60745204d8_shutterstock_312723245_4be8eb74_490x330.jpg", "https://www.mauimagicsnorkel.com/wp-content/uploads/MauiMagic_Turtles_044-667x500.jpg", "https://i.kinja-img.com/gawker-media/image/upload/s--0LbWz4Qg--/c_scale,f_auto,fl_progressive,q_80,w_800/qijglqcr4hpiljsxgx9w.jpg", "https://rincon.surfrider.org/wp-content/uploads/2016/02/Sea_Turtle_506f386b36187-1.jpg", "https://images.earthtouchnews.com/media/1950520/female-wood-turtle_2018_01_04.jpeg", "http://i.imgur.com/SZGHT18.jpg",
    ]
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading the Command, Please Wait.,,,,")

    message.channel.send(embed).then(message => {
        embed.setColor("#000FF")
        embed.setDescription("Here's a Photo of a Turtle ")
        embed.setImage(replies[result])
        embed.setFooter("Command Ran By: " + usernameid, userURL)
        message.edit(embed)
    })
}
module.exports.help = {
    name: "turtle",
    names: "Turtle"
}