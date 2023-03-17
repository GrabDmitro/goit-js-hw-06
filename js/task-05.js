const nameRefInput = document.querySelector("#name-input");
const nameRefOutput = document.querySelector("#name-output");

nameRefInput.addEventListener("input", changer);
function changer(event) {
  if (event.currentTarget.value === "") {
    nameRefOutput.textContent = "Anonymous";
  } else {
    nameRefOutput.textContent = event.currentTarget.value;
  }
}
