function populate()
{
  const jsonUrl = "https://mdtx.cc/assets/json/webring.json";
  const request = new Request(jsonUrl);

  fetch(request)
  .then((response) => 
  {
    if(!response.ok)
      throw new Error(`Webring: couldn't fetch JSON! (${response.status})`);

    return response.json();
  })
  .then((response) => populateWebring(response));
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