// type basic
const doc = fetch('./style.css');

doc
  .then((r) => r.json())
  .then((body) => {
    const conteudo = document.querySelector('.conteudo');
    const style = document.createElement('style');
    style.innerHTML = body;
    console.log(style);
    conteudo.appendChild(style);
  });

// type cors

const requisition = fetch('https://viacep.com.br/ws/01001000/json/');

requisition
  .then((response) => response.json())
  .then((body) => {
    console.log(body);
  });
