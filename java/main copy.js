const submitButtonElement = document.getElementById("submit-button");
const contactMeElement = document.getElementById("contact-me");
const contactParElement = document.getElementById("contact-par");
const nameInputElement = document.getElementById("name-input");
const emailInputElement = document.getElementById("email-input");
const messageInputElement = document.getElementById("message-input");
const contactFooterElement = document.getElementById("contact-footer");
const formElement = document.querySelector("form");
const bodyElement = document.querySelector("body");

const inputElement = document.querySelector("input");

if (localStorage.submitted === true || !localStorage.submitted) {
  bodyElement.style.backgroundColor = "#ffff00";
} else {
  bodyElement.style.backgroundColor = "#00ffff";
}
//store partial-input before submission
/* let nameEnter = nameInputElement.value;

if (nameEnter !== "") {
  localStorage.text = nameEnter;
  nameInputElement.value = localStorage.text;
} */

//nameInputElement.value = localStorage.enteredName;

submitButtonElement.addEventListener("click", function (e) {
  e.preventDefault(); // from https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit

  let enteredName = nameInputElement.value;
  let enteredEmail = emailInputElement.value;
  let enteredMessage = messageInputElement.value;

  //Change message and colours if all input boxes in the form are filled out
  if (enteredName !== "" && enteredEmail !== "" && enteredMessage !== "") {
    //bodyElement.style.backgroundColor = "#acb6a8";
    contactMeElement.style.color = "#FFFFFF";
    contactMeElement.innerText = "Thank You " + enteredName + "!";
    contactParElement.innerText =
      "I'll get back to you within 24 hours.\nLooking forward to working togrther";

    //footer position
    contactFooterElement.style.position = "absolute";
    contactFooterElement.style.bottom = "0";

    //remove form after it was submitted
    formElement.remove();
    localStorage.submitted = true;
  } else {
    localStorage.submitted = false;
    // red border to the box that wasnt filled out
    if (enteredName == "") {
      nameInputElement.style.border = "1px solid #FF0000";
    }
    if (enteredEmail == "") {
      emailInputElement.style.border = "1px solid #FF0000";
    }
    if (enteredMessage == "") {
      messageInputElement.style.border = "1px solid #FF0000";
    }
  }
});
