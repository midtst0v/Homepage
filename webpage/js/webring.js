async function populate()
{
  const jsonUrl = "https://mdtx.cc/assets/json/webring.json";
  const request = new Request(jsonUrl);
  const response = await fetch(request);
  const webRing = await response.json();
  //const webRing = `{ "webring": [ {"alt" : "bodacious44", "url" : "https://bodacious44.net", "img" : "https://bodacious44.net/pics/8831/newbutton.gif"}, {"alt" : "mdtx.cc", "url" : "https://mdtx.cc", "img" : "https://mdtx.cc/assets/img/88x31.png"} ] }`;
  populateWebring(webRing);
}

function populateWebring(webring)
{
  let ring = document.getElementById("webring");
  for (const btn of webring.webring)
  {
    const link = document.createElement("a");
    const img = document.createElement("img");

    img.src = btn.img;
    img.alt = btn.alt;
    link.href = btn.url;

    link.appendChild(img);
    ring.append(link);
  }
}

window.addEventListener("load", populate);