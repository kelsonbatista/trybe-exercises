// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => {
      document.getElementById('jokeContainer').innerText = data.joke;
    });
};

window.onload = () => fetchJoke();

//   const divJoke = document.getElementById('jokeContainer');
//   const dataJoke = (JSON.parse(data)).map((e) => {
//     const textJoke = document.createElement('p');
//     textJoke.innerHTML = dataJoke.joke;
//     divJoke.appendChild(textJoke);
// });
