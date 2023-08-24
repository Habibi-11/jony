// navbar
const nav = document.querySelector("header nav");

window.addEventListener("scroll", () => {
    const windowHeight = window.pageYOffset;

    if (windowHeight >= 500) {
        nav.classList.add('fixed-nav')
    } else {
        nav.classList.remove('fixed-nav')
    } 
});

const toggle = document.querySelector('.toggle');
const links = document.querySelector("nav ul")
toggle.addEventListener("click", () => {
    links.classList.toggle("show");
})


// date

const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();
