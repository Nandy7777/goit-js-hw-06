function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(`.change-color`);
const colorValue = document.querySelector(`.color`);
const body = document.querySelector(`body`);

button.addEventListener(`click`, onButton);

function onButton(event) {
  event.preventDefault();
}
