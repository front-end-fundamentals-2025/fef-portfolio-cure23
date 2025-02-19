const submitButtonElement = document.getElementById("submit-button");
const bodyElement = document.querySelector("body");

const inputElement = document.querySelector("input");

submitButtonElement.addEventListener("click", function (e) {
  e.preventDefault(); // from https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
  bodyElement.style.backgroundColor = "#FF0000";
  let enteredName = inputElement.value;

  if (enteredName !== "") {
    localStorage.key = value;
  }
});
