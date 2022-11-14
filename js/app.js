// Variabless
const hamburger = document.querySelector(".main-nav__hamburger"),
  menuList = document.querySelector(".main-nav__list");

// Event Listeners
hamburger.addEventListener("click", () => {
  hamburger.classList.add("show-element");
});
