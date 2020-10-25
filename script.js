


const toggle = document.querySelector(`.menutoggle`);
const navbar = document.querySelector(`.navbar ul`);
const ul = document.querySelectorAll(`.navbar ul li`);

toggle.addEventListener(`click`, ()=>{
    navbar.classList.toggle(`slide`);
});