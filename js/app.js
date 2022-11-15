// MOBILE MENU
// Variabless

const toggleIcons = document.querySelector(".main-nav__toggle-icons");
const menuList = document.querySelector(".main-nav__list");
const mainHeader = document.querySelector(".main-header__container");
const iconBars = document.querySelector(".fa-bars");
const iconTimes = document.querySelector(".fa-times");

toggleIcons.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("fa-bars")) {
    iconBars.classList.toggle("hide-element");
    iconTimes.classList.toggle("hide-element");
    iconTimes.classList.toggle("on-top");
    menuList.classList.toggle("show-element");
    mainHeader.classList.add("main-header_toggle");
  } else if (e.target.classList.contains("fa-times")) {
    iconBars.classList.toggle("hide-element");
    iconTimes.classList.toggle("hide-element");
    iconTimes.classList.toggle("on-top");
    menuList.classList.toggle("show-element");
    mainHeader.classList.add("main-header_toggle");
  }
});

// WORK SECTION
const work = document.querySelector("#work");

document.addEventListener("DOMContentLoaded", () => {
  // create the head
  const containerDiv = document.createElement("div");
  const headDiv = document.createElement("div");
  const bodyDiv = document.createElement("div");
  const headline = document.createElement("h3");
  // const closeButton = document.createElement("");
  const list = document.createElement("ul");
  const ListItem1 = document.createElement("li");
  const ListItem2 = document.createElement("li");
  const ListItem3 = document.createElement("li");
  const ListItem4 = document.createElement("li");
  const ListItem5 = document.createElement("li");
  const headImageDiv = document.createElement("div");
  const headImage = document.createElement("img");

  containerDiv.classList.add("work__project");
  containerDiv.appendChild(headDiv);
  headDiv.appendChild(headline);
  // headDiv.appendChild('closeButton')
  headDiv.appendChild(list);
  list.appendChild(ListItem1);
  list.appendChild(ListItem2);
  list.appendChild(ListItem3);
  list.appendChild(ListItem4);
  list.appendChild(ListItem5);
  containerDiv.appendChild(bodyDiv);
  console.log(containerDiv);
  work.appendChild(containerDiv);
});
