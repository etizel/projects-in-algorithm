// create champs
function createChamp(name, power, hability) {
  return {
    name,
    power,
    hability,
    ulimate: function () {
      console.log(
        `The name is: ${this.name} and power level is: ${this.power} and this hability is: ${this.hability}`,
      );
    },
  };
}

const sakuraHaruno = createChamp(
  'Sakura Haruno',
  6499,
  'Okashou: Impact Blossom Cherry',
);
const sasukeUchiha = createChamp(
  'Sasuke Uchiha',
  7499,
  'Amateratsu: Eternals Dark Flames',
);
console.log(sasukeUchiha, sakuraHaruno);
console.log(sasukeUchiha.ulimate());
console.log(sakuraHaruno.ulimate());

// create buttons

function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }

  return Object.freeze({
    text,
    element,
  });
}
const btnSell = createButton('Buy');
const btnBuy = createButton('Sell');

console.log(btnSell, btnBuy);
console.log(btnSell.element());
console.log(btnBuy.element());
