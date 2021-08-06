const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const INTERVAL_TIME = 1000;

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtn.setAttribute('disabled', '');
  intervalId = setInterval(getBgColor, INTERVAL_TIME);
}

function onStopBtnClick() {
  startBtn.removeAttribute('disabled', '');
  clearInterval(intervalId);
}

function getBgColor() {
  document.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
