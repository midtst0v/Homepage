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
    console.log("Webring: couldn't fetch JSON!");
  }
}

function populateWebring(webring)
{
  let ring = document.getElementById("webring");
  for (let btn of webring.webring)
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

populate();