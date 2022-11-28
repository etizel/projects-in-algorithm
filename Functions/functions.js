

// função construtora para criação de vários objetos dentro de um método universal
function champs() {
  return `${this.power} ${this.money}`
}


const lissandra = {
  power: 'Tûmulo congelado',
  money: 7900,
};


const nami = {
  power: 'Maré Violenta',
  money: 6500,
};

const missFortune = {
  power: 'Chuva de Disparos',
  money: 7900,
}

const callChamp = champs.call(nami);
const callChamp2 = champs.call(lissandra);
const callChamp3 = champs.call(missFortune);


//criação de método através de prototipo e função construtora para utilizar métodos de arrays dentro de arrays-like com o call();

const frutas1 = ['Uva', 'Maçã', 'Banana'];

Array.prototype.moreThis = function() {
  console.log(this)
}

Array.prototype.pop.call(frutas1)
Array.prototype.push.call(frutas1, 'Banana');