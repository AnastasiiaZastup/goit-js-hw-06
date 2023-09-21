function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColor = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');

function changesColor() {
  const randomColor = getRandomHexColor();
  backgroundColor.style.backgroundColor = randomColor;
}

buttonColor.addEventListener('click', changesColor);