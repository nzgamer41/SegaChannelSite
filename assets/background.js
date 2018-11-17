console.log("Sega Channel intro page created by Alex Cheer");
setTimeout(changeBG, 1500);

function changeBG() {
document.body.style.backgroundImage = "url('../assets/tile2.png')";
setTimeout(changeBG1, 1500) ;
}

function changeBG1() {
document.body.style.backgroundImage = "url('../assets/tile1.png')";
setTimeout(changeBG, 1500);
}

function startBG() {
	if (confirm('Do you want the background music to start? (This is a fix for the autoplay issue described earlier)')) {
		var vid = document.getElementById("BGmus");
		vid.play();
		console.log("music should be playing");
	} 
	else {
		var vid = document.getElementById("BGmus");
		vid.pause();
	}
}