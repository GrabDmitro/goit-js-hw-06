let counterValue = 0;
const numRef = document.querySelector("#value");

const buttonRefDecrement = document.querySelector(
  ' button[data-action="decrement"]'
);
const buttonRefIncrement = document.querySelector(
  ' button[data-action="increment"]'
);

buttonRefDecrement.addEventListener("click", decrement);
buttonRefIncrement.addEventListener("click", increment);

function decrement(amogus) {
  counterValue = counterValue - 1;
  numRef.textContent = counterValue;
}
function increment(amogus) {
  counterValue = counterValue + 1;
  numRef.textContent = counterValue;
}
