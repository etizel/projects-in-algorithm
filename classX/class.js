class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
  }
}

const buttonPurple = new Button('Sell this', 'purple');
const buttonPink = new Button('Sell this', 'pink');

class Button {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}

// invocando com o static
const buttonStatik = Button.createButton('this is a button 2', 'lightpink');
console.log(buttonStatik);

// criando com um objeto externo

// const pinkOptions = {
//   backgroundColor: 'pink',
//   text: 'this is a button',
//   border: '2px solid',
// };

// const buttonPink = new Button(pinkOptions);
