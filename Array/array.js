const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comidasSplice = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
const comidasPop = comidas.pop();
// Adicione 'Arroz' ao final da array
const arrozPush = comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao início da array
const foodUnshift = comidas.unshift('Peixe', 'Batata');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

html = html;
html2 = html.split('section').join('ul').split('div').join('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

carros.pop();
carrosPop = carros.slice('section');

console.log(carrosPop);

//Modifique a strind with split
let text = 'How are you doing today?';
const myArray = text.split(' ');

const myArray2 = text.split(' ', 3);

// map()

const champs = [
  { name: 'Lissandra', price: 7999 },
  { name: 'Annie', price: 3699 },

  { name: 'Miss Fortune', price: 7999 },
  { name: 'Senna', price: 5600 },

  { name: 'Nami', price: 7999 },

  { name: 'Janna', price: 4000 },
];

const walKing = champs.map((c) => c.name);
const pricIng = champs.map((c) => c.price);

console.log(pricIng);
console.log(walKing);

console.log(champs);

// reduce() numbers

const numbersY = [2, 4, 6, 8, 10, 20, 39, 66, 99, 130];

const numbersX = numbersY.reduce((acumulator, item) => {
  console.log(acumulator, item);
  return acumulator + item;
}, 0);

// reduce() strings

const stringY = ['Sakura Haruno', 'Shikamaru Nara', 'Hinata Hyuga'];

const stringX = stringY.reduce((acumulator, item) => {
  console.log(acumulator, item);
  return acumulator + item;
});

// reduce() object

const champsZ = [
  { name: 'Lissandra', price: 7999 },

  { name: 'Annie', price: 3699 },

  { name: 'Miss Fortune', price: 7999 },

  { name: 'Senna', price: 5600 },

  { name: 'Nami', price: 7999 },

  { name: 'Janna', price: 4000 },
];

const Y = champsZ.reduce((acumulator, item, index) => {
  acumulator[index] = item.price;
  return acumulator;
});

const L = champsZ.reduce((acumulator, item, index) => {
  acumulator[index] = item.name;
  return acumulator;
});

// some() verificação

const fruits = ['Uva', 'Banana', 'Maçã'];

const fruitsX = fruits.some((fruits) => {
  return fruits === 'Uva';
});

// reduce()

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const curso = document.querySelectorAll('.curso');
const arrayAll = Array.from(curso);

const mapObject = arrayAll.map((item) => {
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas').innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorque100 = numeros.filter((x) => x >= 100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const instrumentosSome = instrumentos.some((item) => {
  return item === 'Baixo';
});

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60',
  },
];

const reduceItemns = compras.reduce((acumulator, item, index) => {
  const itemLimpo = +item.preco.replace('R$', '').replace(',', '.');
  console.log(itemLimpo);
  acumulator[index] = item.preco;
  return acumulator + itemLimpo;
}, 0);

// filter()

const itemns = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const cleanArray = itemns.filter((item) => {
  return item;
});

const numberss = [9, 99, 36, 77, 180, 741];

const cleanNumbers = numberss.filter((item) => item >= 99);

const peoples = ['Jilbert', '', null, undefined, 'Reiner', 0, 'Mikasa'];

const cleanPeoples = peoples.filter((item) => {
  return item;
});

const list = [3, 33, 69, 741, 360, 19];

const cleanList = list.filter((l) => l < 69);
