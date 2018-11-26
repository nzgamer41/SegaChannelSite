console.log("Sega Channel intro page created by Alex Cheer");
setTimeout(changeBG, 1500);
window.onload = function() {
  readTextFile();
  document.getElementById("main").addEventListener("keypress", function(){
    startGame();
});
};
function changeBG() {
document.body.style.backgroundImage = "url('../assets/tile2.png')";
setTimeout(changeBG1, 1500) ;
}

function changeBG1() {
document.body.style.backgroundImage = "url('../assets/tile1.png')";
setTimeout(changeBG, 1500);
}

function readTextFile()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "./marquee.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                document.getElementById("text").innerHTML = allText;
            }
        }
    }
    rawFile.send(null);
}

function handleEnter(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        startGame();
    }
}

function startGame(){
console.log("changing site...");
window.location.href = './menu.html';
}