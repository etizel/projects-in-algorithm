const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btncep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
  console.log(event);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}
