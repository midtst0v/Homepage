async function populate()
{
  const jsonUrl = "https://mdtx.cc/assets/json/webring.json";
  const request = new Request(jsonUrl);

  await fetch(request)
  .then((response) => 
  {
    if(!response.ok)
      throw new Error(`Webring: couldn't fetch JSON! (${response.status})`);

    return response.json();
  })
  .then((info) => populateWebring(info));
}

function populateWebring(info)
{
  let ring = document.getElementById("webring");
  for (let btn of info.webring)
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