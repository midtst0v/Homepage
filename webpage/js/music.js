let music = new Audio("assets/audio/qd-anoth.mp3");
music.loop = true;
document.addEventListener("click", (event) => {
  music.play();
});

music.addEventListener("playing", (event) => {
  let playText = document.getElementById("nowplaying");
  let playStatus = "<strong><span>Now Playing:</strong> Quad - Another Worlds (qd-anoth.xm)</span>";
  if (playText.innerHTML != playStatus) // the text on the page gets cached :p
  {
    playText.innerHTML += playStatus;
  }
});