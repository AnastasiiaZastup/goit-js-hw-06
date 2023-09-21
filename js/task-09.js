function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changesColor() {
  const randomColor = getRandomHexColor();
  document.body.style.background = randomColor;
  document.querySelector('.color').textContent = randomColor;
}

const buttonColor = document.querySelector('.change-color');

buttonColor.addEventListener('click', changesColor);