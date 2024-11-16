import "./style.css";

if (module.hot) {
  module.hot.accept();
}


const button = document.querySelector("#button")

button.addEventListener('click', (event) => {
  //event.preventDefault()
})


const fName = document.querySelector("#fName")
const lName = document.querySelector("#lName")

fName.addEventListener('input', () => {
  fName.reportValidity();
  if (fName.validity.tooShort) {
    console.log("Too short.");
  } else {
    console.log('bro')
  }
})

const email = document.querySelector("#email")

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});