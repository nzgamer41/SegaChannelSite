console.log("Sega Channel menu page created by Alex Cheer");
var animate = 0;
setTimeout(changeBG, 500);
window.onload = function() {
  readTextFile();
};
function changeBG() {
if (animate==0){
document.body.style.backgroundImage = "url('../assets/tile3.png')";
document.getElementById("bg").src = "../assets/np1.png";
setTimeout(changeBG1, 500) ;
}
else{
console.log("stopped animation.");
}
}

function changeBG1() {
if (animate==0){
document.body.style.backgroundImage = "url('../assets/tile4.png')";
document.getElementById("bg").src = "../assets/np2.png";
setTimeout(changeBG, 500);
}
else{
console.log("stopped animation.");
}
}

function stopAnimation(){
	animate = 1;
}