const start = document.querySelector('[data-start]');
const pause = document.querySelector('[data-pause]');
const reset = document.querySelector('[data-reset]');

start.addEventListener('click', activeCronos);

function activeCronos() {
  var cronometro = setInterval(callback, 1000);
  var i = 0;
  function callback() {
    console.log(i++);
  }
}

pause.addEventListener('click', pauseCronos);

function pauseCronos() {
  var cronometro = setInterval(callback, 1000);

  function callback() {
    clearInterval(cronometro);
  }
}
