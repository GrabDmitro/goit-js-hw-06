function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector("button");
const textRef = document.querySelector(".color");

buttonRef.addEventListener("click", changeCol);

function changeCol(event) {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  textRef.textContent = color;
}
