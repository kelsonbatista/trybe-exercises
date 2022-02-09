function appendOnSite(data) {
  const ol = document.querySelector("#currency");
  const li = document.createElement("li");
  li.innerHTML = `${data.name} (${data.symbol}): $${Number(
    data.priceUsd
  ).toFixed(2)}`;
  ol.appendChild(li);
}

function onError(error) {
  const ol = document.querySelector("#currency");
  const li = document.createElement("li");
  li.innerHTML = `Ocorreu um erro: ${error}`;
  ol.appendChild(li);
}

async function fetchData() {
  try {
    const url = "https://api.coincap.io/v2/assets";
    const promise = await fetch(url);
    const resposta = await promise.json();
    //.then((response) => response.json()
    // .then((result) => {
    resposta.data.forEach((e, i) => {
      if (i < 10) appendOnSite(e);
    });
  } catch (error) {
    onError(error);
  }
  //}))
  //.catch((erro) => console.log(`Ocorreu um erro: ${erro}`));
}

window.onload = fetchData();
