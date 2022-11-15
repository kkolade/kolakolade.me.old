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

const data = [
  {
    id: 1,
    name: "TONIC",
    companies: ["CANOPY", "Back end Dev", 2015],
    img: "asset/images/twitter.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
    technologies: ["html", "css", "javaScript"],
  },

  {
    id: 2,
    name: "TONIC",
    companies: ["CANOPY", "Back end Dev", 2015],
    img: "asset/images/twitter.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
    technologies: ["html", "css", "javaScript"],
  },
];

// WORK SECTION
const work = document.querySelector("#work");

document.addEventListener("DOMContentLoaded", () => {
  // create elements of the card and added all relevant attributed and children
  const containerDiv = document.createElement("div");
  containerDiv.className = "container work__container";

  const cardContainer = document.createElement("div");
  cardContainer.className = "work_card";

  const cardImage = document.createElement("img");
  cardImage.className = "work__card-image card-item";

  const cardHeadDiv = document.createElement("div");
  const cardTitle = document.createElement("div");
  cardTitle.className = "work__card-title";

  const projectDetail = document.createElement("div");

  const closeButton = document.createElement("i");
  closeButton.className = "fa-solid fa-times";

  cardHeadDiv.appendChild(cardTitle);
  cardHeadDiv.appendChild(projectDetail);
  cardHeadDiv.appendChild(closeButton);

  const cardBodyDiv = document.createElement("div");
  const cardDescription = document.createElement("p");
  cardDescription.className = "work__card-description description-text";

  const badgeContainer = document.createElement("div");

  const buttonContainer = document.createElement("div");
  const seeProject = document.createElement("button");
  const seeRepo = document.createElement("button");

  buttonContainer.appendChild(seeProject);
  buttonContainer.appendChild(seeRepo);

  cardBodyDiv.appendChild(cardDescription);
  cardBodyDiv.appendChild(badgeContainer);
  cardBodyDiv.appendChild(buttonContainer);

  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardHeadDiv);
  cardContainer.appendChild(cardBodyDiv);

  containerDiv.appendChild(cardContainer);

  work.appendChild(containerDiv);
});
//   for (let i = 0; i < 5; i++) {
//     const listItems = document.createElement("li");

//     listItems.innerText = data[0].companies[i];
//     listItems.classList.add("work__card-technology-item");
//     list.appendChild(listItems);
//   }
//   headline.innerText = data[0].name;
// });
