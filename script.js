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
	const twitchPlayer = document.getElementById("player");
	twitchPlayer.src = `https://player.twitch.tv/?channel=${channelName}&parent=${domain}`;
}