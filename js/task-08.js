const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const formData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  if (formData.email === "" || formData.password === "") {
    alert("У формі є незаповнені поля");
  } else {
    console.log(formData);
    event.currentTarget.reset();
  }
}
