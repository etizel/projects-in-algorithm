const start = document.querySelector('[data-start]');
const pause = document.querySelector('[data-pause]');
const time = document.querySelector('[data-time]');

start.addEventListener('click', activeCronos);
pause.addEventListener('click', pauseCronos);
pause.addEventListener('dblclick', resetCronos);

let i = 0;
let timer;

function activeCronos() {
  timer = setInterval(() => {
    time.innerText = i++;
  }, 1000);
  start.setAttribute('disabled', '');
}

function pauseCronos() {
  clearInterval(timer);
  start.removeAttribute('disabled');
}

function resetCronos() {
  time.innerText = 0;
  i = 0;
}
