const submitButtonElement = document.getElementById("submitb");
const bodyElement = document.querySelector("body");

const inputElement = document.querySelector("input");

submitButtonElement.addEventListener("click", function (e) {
  bodyElement.style.backgroundColor = "#FF0000";
  let enteredName = inputElement.value;

  if (enteredName !== "") {
    localStorage.key = value;
  }
});
