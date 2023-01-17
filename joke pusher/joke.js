const chuky = document.querySelector('.chuky');
const nextX = document.querySelector('.next');

function pushJoke() {
  const fetchNorris = fetch('https://api.chucknorris.io/jokes/random');

  fetchNorris
    .then((response) => response.json())
    .then((jsonNorris) => {
      chuky.innerText = jsonNorris.value;
    });
}

nextX.addEventListener('click', pushJoke);
