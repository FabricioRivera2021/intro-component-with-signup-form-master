const form = document.getElementById("myForm");
const nameInput = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const emailCheck = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/

const warningEmpty = document.querySelectorAll(".warning-empty")

form.addEventListener("submit", e=>{
    e.preventDefault();

    checkInputs();
})

//Funcion para checkear cada input
function checkInputs(){
    const nameValue = nameInput.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    //email reset
    email.nextElementSibling.classList = "warning noselect";
    email.nextElementSibling.nextElementSibling.classList = "warning noselect";
    email.style.border = "1px solid rgba(0, 0, 0, 0.1)";
    email.style.backgroundImage = "none";
    email.parentElement.style.paddingBottom = "30px";

    if (nameValue === ""){
        // mostrar error
        nameInput.nextElementSibling.classList = "warning warning-show noselect";
        nameInput.style.border = "1px solid rgba(228, 8, 8, 0.885)";
        nameInput.style.backgroundImage = "url(./images/icon-error.svg)";
        nameInput.parentElement.style.padding = 0;
    } else if (nameInput.nextElementSibling.classList == "warning warning-show noselect") {
        // no mostrar nada
        nameInput.nextElementSibling.classList = "warning noselect"
        nameInput.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        nameInput.style.backgroundImage = "none";
        nameInput.parentElement.style.paddingBottom = "30px";
    }

    if (lastNameValue === ""){
        // mostrar error
        lastName.nextElementSibling.classList = "warning warning-show noselect"
        lastName.style.border = "1px solid rgba(228, 8, 8, 0.885)";
        lastName.style.backgroundImage = "url(./images/icon-error.svg)";
        lastName.parentElement.style.padding = 0;
    } else if (lastName.nextElementSibling.classList == "warning warning-show noselect"){
        // no mostrar nada
        lastName.nextElementSibling.classList = "warning noselect"
        lastName.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        lastName.style.backgroundImage = "none";
        lastName.parentElement.style.paddingBottom = "30px";
    }

    if (emailValue === ""){
        // mostrar error
        email.nextElementSibling.classList = "warning warning-show noselect";
        email.style.border = "1px solid rgba(228, 8, 8, 0.885)";
        email.style.backgroundImage = "url(./images/icon-error.svg)";
        email.parentElement.style.padding = 0;
    } else if (emailCheck.test(emailValue) === true){
        email.nextElementSibling.classList = "warning noselect";
        email.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        email.style.backgroundImage = "none";
        email.parentElement.style.paddingBottom = "30px";
    } else if (emailCheck.test(emailValue) === false) {
        email.nextElementSibling.nextElementSibling.classList = "warning warning-show noselect";
        email.style.border = "1px solid rgba(228, 8, 8, 0.885)";
        email.style.backgroundImage = "url(./images/icon-error.svg)";
        email.parentElement.style.padding = 0;
    } 

    if (passwordValue === ""){
        // mostrar error
        password.nextElementSibling.classList = "warning warning-show noselect";
        password.style.border = "1px solid rgba(228, 8, 8, 0.885)";
        password.style.backgroundImage = "url(./images/icon-error.svg)";
        password.parentElement.style.padding = 0;
    } else if (password.nextElementSibling.classList == "warning warning-show noselect") {
        // no mostrar nada
        password.nextElementSibling.classList = "warning noselect";
        password.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        password.style.backgroundImage = "none";
        password.parentElement.style.paddingBottom = "30px";
    }
}