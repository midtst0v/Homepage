let music = new Audio("assets/audio/qd-anoth.mp3");
music.loop = true;

let statusContainer = document.getElementById("nowplaying");
let statusSpan = document.getElementById("playStatus");
let bgmButton = document.getElementById("bgmSwitch");

window.addEventListener("load", setPaused);

function setPlaying(artist, title)
{
  setPauseButton(bgmButton);
  statusSpan.innerHTML = "<strong>Now Playing: </strong>" + artist + " - " + title;
  music.play();
}

function setPaused()
{
  setPlayButton(bgmButton);
  statusSpan.textContent = "";
  music.pause();
}


function setPlayButton(bgmButton)
{
  bgmButton.textContent = "Play BGM";
  bgmButton.onclick = function (){
    setPlaying("Quad", "Another Worlds");
  }
}

function setPauseButton(bgmButton)
{
  bgmButton.textContent = "Pause BGM";
  bgmButton.onclick = setPaused;
}