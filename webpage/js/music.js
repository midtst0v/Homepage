let music = document.getElementById("music");
music.pause();

let statusContainer = document.getElementById("nowplaying");
let statusSpan = document.getElementById("playStatus");
let bgmButton = document.getElementById("bgmSwitch");

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
  bgmButton.removeEventListener("click", setPaused);
  bgmButton.textContent = "Play BGM";
  bgmButton.onclick = function()
  {
    setPlaying("Quad", "Another Worlds");
  }
}

function setPauseButton(bgmButton)
{
  bgmButton.removeEventListener("click", setPlaying);
  bgmButton.textContent = "Pause BGM";
  bgmButton.onclick = setPaused;
}

setPlayButton(bgmButton);