const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyling = {
  element: btn,
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyling[name](value);
  showCss();
}

function showCss() {
  cssText.innerHTML = btn.style.cssText.split('; ').join(';</span><span>');
}
