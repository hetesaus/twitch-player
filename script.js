const domain = "hetesaus.github.io";

// Function to get query parameters from the URL
function getQueryParam(param) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

// Get the channel name from the query parameter
const channelName = getQueryParam("channel");

// Update channel name if provided
if (channelName) {
	const player = document.getElementById("player");
	const chat = document.getElementById("chat");
	
	player.src = `https://player.twitch.tv/?channel=${channelName}&parent=${domain}`;
	chat.src = `https://www.twitch.tv/embed/{channelName}/chat`;
}