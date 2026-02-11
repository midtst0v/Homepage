async function populate()
{
  const jsonUrl = "https://mdtx.cc/assets/json/webring.json";
  
  try 
  {
    const request = new Request(jsonUrl);
    const response = await fetch(request);
    const webRing = await response.json();

    populateWebring(webRing);
  }
  catch(error)
  {
    console.log("Web ring: Couldn't fetch JSON!");
  }
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