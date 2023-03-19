function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesRef = document.querySelector("#boxes");
const createRef = document.querySelector("button[data-create]");
const destroyRef = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector("input");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = 30 + 10 * i + "px";
    box.style.width = 30 + 10 * i + "px";
    boxesRef.appendChild(box);
  }
}

function creator() {
  createBoxes(inputRef.value);
}

function destroyer() {
  boxesRef.innerHTML = `<div id="boxes"></div>`;
}

createRef.addEventListener("click", creator);
destroyRef.addEventListener("click", destroyer);
