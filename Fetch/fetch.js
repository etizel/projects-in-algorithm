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
