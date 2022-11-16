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

const projectData = [
  {
    id: 1,
    name: "PROJECT 1",
    detail: ["CANOPY", ".", "Back end Dev", ".", 2015],
    img: "./asset/images/portfolio-1.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
    tech: ["html", "css", "javaScript"],
    site: "https://kolakolade.me/project1",
    repo: "https://github.com/kolakolade/project1",
  },
  {
    id: 2,
    name: "PROJECT 2",
    detail: ["CANOPY", ".", "Back end Dev", ".", 2015],
    img: "./asset/images/portfolio-2.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
    tech: ["html", "css", "javaScript"],
    site: "https://kolakolade.me/project2",
    repo: "https://github.com/kolakolade/project2",
  },
  {
    id: 3,
    name: "PROJECT 3",
    detail: ["CANOPY", ".", "Back end Dev", ".", 2015],
    img: "./asset/images/portfolio-3.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
    tech: ["html", "css", "javaScript"],
    site: "https://kolakolade.me/project3",
    repo: "https://github.com/kolakolade/project3",
  },
  {
    id: 4,
    name: "PROJECT 4",
    detail: ["CANOPY", ".", "Back end Dev", ".", 2015],
    img: "./asset/images/portfolio-4.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the",
    tech: ["html", "css", "javaScript"],
    site: "https://kolakolade.me/project4",
    repo: "https://github.com/kolakolade/project4",
  },
];

// WORK SECTION
const work = document.querySelector("#work");

// Create a function to build a project card

const buildProjectCard = (project) => {
  // Create required html elements for the project card
  const containerDiv = document.createElement("div");
  const showcase = document.createElement("div");
  const thumbnailContainer = document.createElement("div");
  const cardContainer = document.createElement("div");
  const cardHeadDiv = document.createElement("div");
  const cardTitle = document.createElement("div");
  const closeButton = document.createElement("i");
  const cardImage = document.createElement("img");
  const projectDetail = document.createElement("div");
  const projectDetailMarker = document.createElement("div");
  const cardBodyDiv = document.createElement("div");
  const cardDescription = document.createElement("p");
  const badgeContainer = document.createElement("div");
  const list = document.createElement("ul");
  const buttonContainer = document.createElement("div");
  const seeProject = document.createElement("button");
  const seeRepo = document.createElement("button");

  // Add content and attributes to the created elements
  containerDiv.className = "container work__container";
  showcase.className = "work__showcase";
  thumbnailContainer.className = "work__thumbnail";
  cardContainer.className = "work__card";
  projectDetail.className = "work__card-info";
  projectDetailMarker.className = "marker";
  cardTitle.className = "work__card-title";
  closeButton.className = "fa-solid fa-times hidden";
  cardImage.className = "work__card-image card-item";
  cardBodyDiv.className = "work__card-text-content card-item";
  cardDescription.className = "work__card-description description-text";
  list.className = "work__card-technology-list";
  seeProject.textContent = "See live";
  seeProject.className = "work__cta btn-primary";
  seeRepo.textContent = "See Source";
  seeRepo.className = "work__cta btn-primary";

  cardHeadDiv.appendChild(cardTitle);
  cardHeadDiv.appendChild(closeButton);
  cardHeadDiv.appendChild(projectDetail);
  cardHeadDiv.appendChild(projectDetail);
  buttonContainer.appendChild(seeProject);
  buttonContainer.appendChild(seeRepo);
  cardBodyDiv.appendChild(cardDescription);
  cardBodyDiv.appendChild(badgeContainer);
  badgeContainer.appendChild(list);
  cardBodyDiv.appendChild(buttonContainer);
  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardHeadDiv);
  cardContainer.appendChild(cardBodyDiv);
  containerDiv.appendChild(cardContainer);
  // containerDiv.appendChild(showcase);
  // containerDiv.appendChild(thumbnailContainer);

  // Add content dynamically to the html document
  cardImage.setAttribute("src", `${project.img}`);
  cardTitle.textContent = project.name;
  cardDescription.textContent = project.desc;

  for (let i = 0; i < project.detail.length; i++) {
    const detail = document.createElement("p");
    detail.textContent = project.detail[i];
    detail.className = "work__card-project-titlet--callout";
    if (i % 2 === 0) {
      projectDetail.appendChild(detail);
    } else {
      projectDetail.appendChild(projectDetailMarker);
    }
  }

  for (let j = 0; j < project.tech.length; j++) {
    const listItem = document.createElement("li");
    listItem.className = "work__card-technology-item";
    listItem.textContent = project.tech[j];
    list.appendChild(listItem);
  }

  // Append the card to the DOM

  return work.appendChild(containerDiv);
};

let card = buildProjectCard(projectData[0]);
console.log(card);

// document.addEventListener("DOMContentLoaded", () => {
//   // create elements of the card and added all relevant attributed and children

// });

// Form Validation
const contactForm = document.querySelector(".contact__form");
const contactName = document.querySelector(".contact__name");
const contactTextArea = document.querySelector(".contact__text");
const contactEmail = document.querySelector(".contact__email");
const contactSubmit = document.querySelector(".contact__cta");
const regEx = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
