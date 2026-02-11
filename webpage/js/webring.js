async function populate()
{
  const jsonPath = "https://mdtx.cc/assets/json/webring.json";

  const request = new Request(jsonPath);
  const response = await fetch(request);
  try
  {
    let webRing = await response.json();
    if (!webRing) throw "Could not fetch JSON: " + jsonPath;
    populateWebring(webRing);
  }
  catch(error)
  {
    console.log(error);
  }
}

function populateWebring(webring)
{
  const ring = document.getElementById("webring");
  for (const btn of webring)
  {
    const link = document.createElement("a");
    const img = document.createElement("img");

    img.src = btn.img;
    img.alt = btn.alt;
    link.href = btn.url;

    link.appendChild(img);
    ring.appendChild(link);
  }
}

document.addEventListener("load", populate);