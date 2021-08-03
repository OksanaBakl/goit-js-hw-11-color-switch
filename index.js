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

const INTERVAL = 1000;

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtn.removeAttribute('disable', '');
  intervalId = setInterval(getBgColor, INTERVAL);
}

function getBgColor() {
  document.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function onStopBtnClick() {
  startBtn.removeAttribute('disabled', '');
  clearInterval(intervalId);
}
