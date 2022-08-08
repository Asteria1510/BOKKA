document
  .getElementById("btn__iniciar-sesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resizer", pageWidth);

//VARIABLES
var container_login_register = document.querySelector(
  ".container__login-register"
);
var form_login = document.querySelector(".form__login");
var form_register = document.querySelector(".form__register");
var back_box_login = document.querySelector(".back__box-login ");
var back_box_register = document.querySelector(".back__box-register");

function pageWidth() {
  if (window.innerWidth > 850) {
    back_box_login.style.display = "block";
    back_box_register.style.display = "block";
  } else {
    back_box_register.style.display = "block";
    back_box_register.style.opacity = "1";
    back_box_login.style.display = "none";
    form_login.style.display = "block";
    form_register.style.display = "none";
    container_login.register.style = "0px";
  }
}

pageWidth();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    form_register.style.display = "none";
    container_login_register.style.left = "410px";
    form_login.style.display = "block";
    back_box_register.style.opacity = "1";
    back_box_login.style.opacity = "0";
  } else {
    form_register.style.display = "none";
    container_login_register.style.left = "0px";
    form_login.style.display = "block";
    back_box_register.style.opacity = "block";
    back_box_login.style.opacity = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    form_register.style.display = "block";
    container_login_register.style.left = "10px";
    form_login.style.display = "none";
    back_box_register.style.opacity = "0";
    back_box_login.style.opacity = "1";
  } else {
    form_register.style.display = "block";
    container_login_register.style.left = "0px";
    form_login.style.display = "none";
    back_box_register.style.opacity = "none";
    back_box_login.style.opacity = "block";
    back_box_login.style.opacity = "1";
  }
}
