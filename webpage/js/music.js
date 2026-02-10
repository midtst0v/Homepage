let music = new Audio("assets/audio/qd-anoth.mp3");
music.loop = true;
document.addEventListener("click", (event) => {
  music.play();
});

music.addEventListener("playing", (event) => {
  document.getElementById("nowplaying").innerHTML += "<strong><span>Now Playing:</strong> Quad - Another Worlds (qd-anoth.xm)</span>";
});