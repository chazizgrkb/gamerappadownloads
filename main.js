//do i have to develop this fucking website
//on google chrome
function playAudio(url) {
  new Audio(url).play();
}

fetch("downloads.json").then(data => data.json().then(downloads => {
	productList = downloads;
	for (const i in downloads) {
		console.log(i);
		for (const j in downloads[i]) {
			console.log(j);
		}
	}
}));
