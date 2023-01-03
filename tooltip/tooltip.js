const toolTips = document.querySelectorAll('[data-tooltip]');

toolTips.forEach((item) => {
  item.addEventListener('mouseover', activeMouseOver);
});

function activeMouseOver(event) {
  const toolTipBox = textInsideTable(this);
  toolTipBox.style.top = event.pageY + 'px';
  toolTipBox.style.left = event.pageX + 'px';

  onMouseMove.toolTipBox = toolTipBox;
  this.addEventListener('mousemove', onMouseMove);
  onMouseLeave.toolTipBox = toolTipBox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave);
}

const onMouseMove = {
  handleEvent(event) {
    this.toolTipBox.style.top = event.pageY + 20 + 'px';
    this.toolTipBox.style.left = event.pageX + 20 + 'px';
  },
};

const onMouseLeave = {
  handleEvent() {
    this.toolTipBox.remove();
  },
};

function textInsideTable(element) {
  const toolTipBox = document.createElement('div');
  toolTipBox.classList.add('tooltip');
  const text = element.getAttribute('aria-label');
  toolTipBox.innerText = text;
  document.body.appendChild(toolTipBox);
  return toolTipBox;
}
