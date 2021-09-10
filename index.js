const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body')
const startBtn = document.querySelector('[data-action="start"]')
const stopBtn = document.querySelector('[data-action="stop"]')

startBtn.addEventListener('click', changeBgc)
stopBtn.addEventListener('click', stopChangeBgc)

let intervalId = null

function changeBgc() {
    intervalId = setInterval(() => {
        body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`
        startBtn.setAttribute('disabled', "disabled")
    }, 1000)
}

function stopChangeBgc() {
    clearInterval(intervalId)
    startBtn.removeAttribute('disabled', "disabled")
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

