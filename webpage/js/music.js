let music = new Audio("assets/audio/qd-anoth.mp3");
let playText = document.getElementById("nowplaying");
let bgmButton = document.getElementById("bgmSwitch");

music.loop = true;
getPlayButton(bgmButton);

music.addEventListener("playing", (event) => {
  let playStatus = "<strong><span>Now Playing:</strong> Quad - Another Worlds (qd-anoth.xm)</span>";
  playText.innerHTML = playStatus;

  let bgmButton = document.getElementById("bgmSwitch");
  bgmButton.innerHTML = "Pause BGM";
  getPauseButton(bgmButton);
});

music.addEventListener("pause", (event) => {
  bgmButton.innerHTML = "Play BGM";
  getPlayButton(bgmButton);
});

function getPlayButton(bgmButton)
{
  bgmButton.addEventListener("click", (event) => {
    music.play();
  });
}

function getPauseButton(bgmButton)
{
  bgmButton.addEventListener("click", (event) => {
    music.pause();
  });
}