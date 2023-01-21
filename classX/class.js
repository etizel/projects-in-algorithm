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
