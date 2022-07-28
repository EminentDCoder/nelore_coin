













let menu = document.getElementById("menu");
let navbar = document.getElementById("navbar")

menu.addEventListener("click", navbarDisplay);
function navbarDisplay(){
    navbar.classList.toggle('active');
}