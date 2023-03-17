const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", changer);

function changer(event) {
  textRef.style.fontSize = event.target.value + "px";
}
