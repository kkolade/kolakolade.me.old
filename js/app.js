// Variabless

const hamburger = document.querySelector('.main-nav__hamburger');
// eslint-disable-next-line no-unused-vars
const menuList = document.querySelector('.main-nav__list');
const mainHeader = document.querySelector('.main-header__container');

// eslint-disable-next-line no-console
console.log(hamburger);
// eslint-disable-next-line no-console
console.log(menuList);

// Event Listeners
hamburger.addEventListener('click', () => {
  menuList.classList.toggle('show-element');
  mainHeader.classList.add('main-header_toggle');
});
