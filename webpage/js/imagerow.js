/* i could do this with a tiled background but i'm busy with other things right now */
const width = 4; // appx width of image in chars
let head = document.getElementById("titleHead").innerHTML;
let imgContainer = document.getElementById("images");

// add a row of images above the title
let count = Math.ceil((head.length) / width);
for (let i = 0; i < count; i++)
{
  imgContainer.innerHTML += "<img src='assets/img/run.gif'>";
}

// add UNDER CONSTRUCTION text to title
let constrText = "[UNDER CONSTRUCTION]";
document.getElementById("titleHead").innerHTML += "<br>" + constrText;