function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(`.change-color`);
const colorValue = document.querySelector(`.color`);

button.addEventListener(`click`, onButton);

function onButton(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorValue.textContent = newColor;
}
