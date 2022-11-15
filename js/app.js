// Variabless

const toggleIcons = document.querySelector(".main-nav__toggle-icons");
const menuList = document.querySelector(".main-nav__list");
const mainHeader = document.querySelector(".main-header__container");
const iconBars = document.querySelector(".fa-bars");
const iconTimes = document.querySelector(".fa-times");

// eslint-disable-next-line no-console
console.log(toggleIcons);
// eslint-disable-next-line no-console
console.log(menuList);
console.log(iconBars);
console.log(iconTimes);

// Event Listeners
// toggleIcons.addEventListener("click", () => {
//   menuList.classList.toggle("show-element");
//   mainHeader.classList.add("main-header_toggle");
// });

toggleIcons.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("fa-bars")) {
    iconBars.classList.toggle("hide-element");
    iconTimes.classList.toggle("hide-element");
    iconTimes.classList.toggle("on-top");
    menuList.classList.toggle("show-element");
    mainHeader.classList.add("main-header_toggle");
    console.log(e.target);
  } else if (e.target.classList.contains("fa-times")) {
    iconBars.classList.toggle("hide-element");
    iconTimes.classList.toggle("hide-element");
    menuList.classList.toggle("show-element");
    mainHeader.classList.add("main-header_toggle");
    console.log(e.target);
  }
});
