module.exports = (bot) => {
	bot.user.setActivity(`Prefix e! or E!`, { type: "STREAMING", url: "https://www.twitch.tv/elarabots_discord" });
	let userssize = bot.users.size;
	let channelsize = bot.channels.size;
	let guildsize = bot.guilds.size;
	var status = [
		`Prefix e! or E! | Serving: ${guildsize} Servers, ${channelsize} Channels, ${userssize} Users`,
		`Prefix e! or E! | More Updates Coming Soon!`,
		`Prefix e! or E! | My Support Server: https://discord.gg/hgsM86w`,
		`Prefix e! or E! | Want a Suggest a new Command? do e!botsuggest`
	];
	setInterval(() => {
		let gameval = Math.floor((Math.random() * status.length));
		bot.user.setActivity(`${status[gameval]}`, { type: "STREAMING", url: "https://www.twitch.tv/elarabots_discord" });
	}, 10000);
};