let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

windows.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    
    });

    let header = document.querySelector('nav-menu');

    nav-menu.classList.toggle('sticky', window.scrollY > 100);

}

// document.addEventListener("DOMContentLoaded", function() {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const menu = document.querySelector(".menu");

//     menuToggle.addEventListener("click", function() {
//         menu.classList.toggle("active");
//     });
// });

// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }

// document.addEventListener("DOMContentLoaded", function() {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const menu = document.querySelector(".menu");

//     menuToggle.addEventListener("click", function() {
//         menu.classList.toggle("active");
//     });
// });\


// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })