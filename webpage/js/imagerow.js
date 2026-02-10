/* i could do this with a tiled background but i'm busy with other things right now */
let width = 4; // appx width of image in chars
let head = document.getElementsByTagName("h1")[0].innerHTML;
let imgContainer = document.getElementById("images");
let count = Math.ceil(head.length / width);

for (let i = 0; i < count; i++)
{
  imgContainer.innerHTML += "<img src='assets/img/run.gif'>";
}