const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let replies = [
        "Three dogs (from First Class cabins!) survived the sinking of the Titanic – two Pomeranians and one Pekingese.",
        "It’s rumored that, at the end of the Beatles song, “A Day in the Life,” Paul McCartney recorded an ultrasonic whistle, audible only to dogs, just for his Shetland sheepdog.",
        "Puppies have 28 teeth and normal adult dogs have 42.",
        "Dogs chase their tails for a variety of reasons: curiosity, exercise, anxiety, predatory instinct or, they might have fleas! If your dog is chasing his tail excessively, talk with your vet.",
        "Dalmatian puppies are pure white when they are born and develop their spots as they grow older.",
        "Dogs and humans have the same type of slow wave sleep (SWS) and rapid eye movement (REM) and during this REM stage dogs can dream. The twitching and paw movements that occur during their sleep are signs that your pet is dreaming",
        "Dogs’ eyes contain a special membrane, called the tapetum lucidum, which allows them to see in the dark.",
        "A large breed dog’s resting heart beats between 60 and 100 times per minute, and a small dog breed’s heart beats between 100-140. Comparatively, a resting human heart beats 60-100 times per minute.",
        "According to a Petside.com - Press poll, 72% of dog owners believe their dog can detect when stormy weather is on the way.",
        "A dog’s normal temperature is between 101 and 102.5 degrees Fahrenheit.",
        "Unlike humans who sweat everywhere, dogs only sweat through the pads of their feet.",
        "Dogs have three eyelids, an upper lid, a lower lid and the third lid, called a nictitating membrane or “haw,” which helps keep the eye moist and protected.",
        "Americans love dogs! 62% of U.S. households own a pet, which equates to 72.9 million homes",
        "45% of dogs sleep in their owner’s bed (we’re pretty sure a large percentage also hogs the blankets!)",
        "Why are dogs’ noses so wet? Dogs’ noses secrete a thin layer of mucous that helps them absorb scent. They then lick their noses to sample the scent through their mouth.",
        "Dogs have about 1,700 taste buds. Humans have approximately 9,000 and cats have around 473.",
        "A Dog’s sense of smell is 10,000 – 100,000 times more acute as that of humans.",
        "It’s a myth that dogs only see in black and white. In fact, it’s believed that dogs see primarily in blue, greenish-yellow, yellow and various shades of gray.",
        "Sound frequency is measured in Hertz (Hz). The higher the Hertz, the higher-pitched the sound. Dogs hear best at 8,000 Hz, while humans hear best at around 2,000 Hz.",
        "Dogs’ ears are extremely expressive. It’s no wonder! There are more than a dozen separate muscles that control a dog’s ear movements.",
        "While the Chow Chow dogs are well known for their distinctive blue-black tongues, they’re actually born with pink tongues. They turn blue-black at 8-10 weeks of age.",
        "When dogs kick after going to the bathroom, they are using the scent glands on their paws to further mark their territory.",
        "Dogs curl up in a ball when they sleep due to an age-old instinct to keep themselves warm and protect their abdomen and vital organs from predators.",
        "Dogs are capable of understanding up to 250 words and gestures, can count up to five and can perform simple mathematical calculations. The average dog is as intelligent as a two-year-old child.",
        "Some stray Russian dogs have figured out how to use the subway system in order to travel to more populated areas in search of food.",
        "Dogs don’t enjoy being hugged as much as humans and other primates.",
        "Two stray dogs in Afghanistan saved 50 American soliders. A Facebook group raised $21,000 to bring the dogs back to the US and reunite them with the soldiers.",
        "Service dogs are trained to know when they are on duty. When their harness is on, they know it’s business time. When you take it off, the pups immediately become playful and energetic.",
        "Tiger Woods stuttered as a child and used to talk to his dog until he fell asleep in an effort to get rid of it.",
        "Seeing eye dogs pee and poo on command so that their owners can clean up after them."];
    let result = Math.floor((Math.random() * replies.length));
    let usernameid = message.author.tag;
    let usernameurl = message.author.avatarURL;
    let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading the Dog Fact")

    message.channel.send(embed).then(message => {
        embed.setColor("#000FF")
        embed.setAuthor(`${usernameid}`, `${usernameurl}`)
        embed.setTitle(`You're Dog Fact!`)
        embed.setDescription(`**${replies[result]}**`)
        message.edit(embed)
    })
}
module.exports.help = {
    name: "dogfact",
    names: "Dogfact"
}