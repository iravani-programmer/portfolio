const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");


// Open / close mobile menu

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});