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

const buttonStatik = Button.createButton('this is a button 2', 'lightpink');
console.log(buttonStatik);
