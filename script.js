const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

// Smooth Scrolling for Navigation Links
const navItems = document.querySelectorAll(".nav__links a");

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Adjust for header height
        behavior: "smooth",
      });
    }
  });
});

// Swiper.js Initialization for Testimonials
const swiper = new Swiper(".swiper", {
  loop: true, // Infinite loop for slides
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000, // 5 seconds
  },
  speed: 800, // Transition speed
});

// Dynamic Color Change for Background and Font
const colors = [
  { background: "#A3B8C4", font: "#FFFFFF" },  // Soft muted blue-gray
  { background: "#B4C6D6", font: "#FFFFFF" },  // Light slate with soft blue tones
  { background: "#D0D7E2", font: "#FFFFFF" },  // Very light, dusty blue
  { background: "#E1D4E1", font: "#FFFFFF" },  // Pale lavender-gray
];
let colorIndex = 0;

function changeColors() {
  const body = document.body;
  const currentColors = colors[colorIndex];

  body.style.backgroundColor = currentColors.background;
  body.style.color = currentColors.font;

  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
}

// Change colors every 5 seconds
setInterval(changeColors, 5000);
// For elements sliding in from the left
ScrollReveal().reveal(".left__section", {
  duration: 1200,
  origin: "left",
  distance: "80px",
  easing: "ease-in-out",
});

// For elements sliding in from the right
ScrollReveal().reveal(".right__section", {
  duration: 1200,
  origin: "right",
  distance: "80px",
  easing: "ease-in-out",
});
