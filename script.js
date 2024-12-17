const domain = "hetesaus.github.io";

function getChannelNameFromPath() {
	const path = window.location.pathname.split('/');
	return path[path.length - 1];
}

const channelName = getChannelNameFromPath();

if (channelName) {
	const player = document.getElementById("player");
	const chat = document.getElementById("chat");
	
	player.src = `https://player.twitch.tv/?channel=${channelName}&parent=${domain}`;
	chat.src = `https://www.twitch.tv/embed/${channelName}/chat?parent=${domain}&darkpopout`;
}