const domain = "hetesaus.github.io";

function getQueryParam(param) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

const channelName = getQueryParam("channel");

if (channelName) {
	const player = document.getElementById("player");
	const chat = document.getElementById("chat");
	
	player.src = `https://player.twitch.tv/?channel=${channelName}&parent=${domain}`;
	chat.src = `https://www.twitch.tv/embed/${channelName}/chat?parent=${domain}&darkpopout`;
	
	document.title = channelName;
}