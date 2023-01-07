const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  btn.style.color = value;
  btn.style.backgroundColor = value;
}
