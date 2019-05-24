const Discord = require('discord.js'); 
module.exports.run = async (bot, message, args) => {
    let replies = [
        "Cats have five toes on each front paw, but only four toes on each back paw.",
        "Cats have true fur, in that they have both an undercoat and an outer coat.",
        "Newborn kittens have closed ear canals that don''t begin to open for nine days.When the eyes open, they are always blue at first. They change color over a period of months to the final eye color.",
        "Most cats have no eyelashes.", "A cat cannot see directly under its nose.",
        "You can tell a cat's mood by looking into its eyes. A frightened or excited cat will have large, round pupils. An angry cat will have narrow pupils. The pupil size is related as much to the cat's emotions as to the degree of light.",
        "It is a common belief that cats are color blind. However, recent studies have shown that cats can see blue, green and red.",
        "A cat can jump even seven times as high as it is tall.",
        "The cat's footpads absorb the shocks of the landing when the cat jumps.",
        "A cat is pregnant for about 58-65 days.",
        "When well treated, a cat can live twenty or more years but the average life span of a domestic cat is 14 years.",
        "Neutering a cat extends its life span by two or three years.",
        "Cats can't taste sweets.",
        "Cats must have fat in their diet because they can't produce it on their own.",
        "Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.",
        "Tylenol and chocolate are both poisonous to cats.",
        "Many cats cannot properly digest cow's milk.",
        "The average cat food meal is the equivalent to about five mice.",
        "Cats have AB blood groups just like people.",
        "The color of the points in Siamese cats is heat related. Cool areas are darker.",
        "The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.",
        "Today there are about 100 distinct breeds of the domestic cat.",
        "The first cat show was in 1871 at the Crystal Palace in London.",
        "In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.",
        "In ancient Egypt, killing a cat was a crime punishable by death.",
        "The ancestor of all domestic cats is the African Wild Cat which still exists today.",
        "Cats do not think that they are little people. They think that we are big cats. This influences their behavior in many ways.",
        "Abraham Lincoln loved cats. He had four of them while he lived in the White House.",
        "Julius Caesar, Henri II, Charles XI, and Napoleon were all afraid of cats.",
        "Cats have an average of 24 whiskers, arranged in four horizontal rows on each side.",
        "Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.",
        "Jaguars are the only big cats that don't roar.",
        "A cat's field of vision is about 185 degrees.",
        "The Maine Coon is 4 to 5 times larger than the Cingapura, the smallest breed of cat.",
        "Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. In the cat family, only cheetahs cannot retract their claws.",
        "A cat can sprint at about thirty-one miles per hour.",
        "A cat can spend five or more hours a day grooming themselves.",
        "The cat has been living in close association with humans for somewhere between 3,500 and 8,000 years.",
        "The domestic house cat is a small carnivorous mammal. Its most immediate ancestor is believed to be the African wild cat.",
        "Cats usually weigh between 2.5 and 7 kg (5.5–16 pounds), although some breeds can exceed 11.3 kg (25 pounds).",
        "Domestic cats tend to live longer if they are not permitted to go outdoors.",
        "Cats, in some cases, can sleep as much as 20 hours in a 24-hour period. The term cat nap refers to the cat's ability to fall asleep (lightly) for a brief period.",
        "Cats dislike citrus scent.",
        "A cat''s tongue has tiny barbs on it.",
        "Cats can be right-pawed or left-pawed.",
        "It has been scientifically proven that stroking a cat can lower one's blood pressure.",
        "Six-toed kittens are so common in Boston and surrounding areas of Massachusetts that experts consider it an established mutation.",
        "Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible."];
    let result = Math.floor((Math.random() * replies.length));
    let usernameid = message.author.tag;
    let usernameurl = message.author.avatarURL;
    let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading the CatFact")

    message.channel.send(embed).then(message => {
        embed.setColor("#000FF")
        embed.setAuthor(`${usernameid}`, `${usernameurl}`)
        embed.setTitle(`You're Cat Fact!`)
        embed.setDescription(`**${replies[result]}**`)
        message.edit(embed)
    })
}
module.exports.help = {
    name: "catfact",
    names: "Catfact"
}