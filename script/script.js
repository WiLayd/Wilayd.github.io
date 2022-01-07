'use strict'
let nav = document.querySelectorAll(".header__li");
let menuBurger = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__nav");
let body = document.querySelector("body");
let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let social = document.querySelector(".social");
let education = document.querySelector(".education");
let footer = document.querySelector(".footer");
console.log(about.offsetTop);

menuBurger.addEventListener('click', (event) => {
    menuBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
})

nav.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const goto = item.hasAttribute('href') ? item.getAttribute('href') : 'body';
        window.scrollTo({
            top: document.querySelector(goto).offsetTop - 70,
            behavior: 'smooth'
          });
        menuBurger.classList.remove('active');
        headerNav.classList.remove('active');
        body.classList.remove('lock');
    })
});




