const nameRefInput = document.querySelector("#validation-input");

nameRefInput.addEventListener("blur", checker);

function checker(event) {
  if (event.currentTarget.dataset.length == event.currentTarget.value.length) {
    event.currentTarget.classList = "valid";
  } else {
    event.currentTarget.classList = "invalid";
  }
}
