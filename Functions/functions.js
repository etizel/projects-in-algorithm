

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
