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

const projectsData = [
  {
    id: 1,
    title: "TONIC",
    summary: ["CANOPY", "Back end Dev", 2015],
    img: "asset/images/portfolio-1.jpg",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    projectStory:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas consequuntur esse distinctio atque! Quos voluptatem, aut qui provident repudiandae corrupti repellat tempora veritatis ut enim ipsam ",
    tech: ["html", "css", "javaScript"],
  },

  {
    id: 2,
    title: "Multi-Post Stories",
    summary: ["Facebook", "Back end Dev", 2015],
    img: "asset/images/portfolio-2.jpg",
    desc: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    tech: ["html", "css", "javaScript"],
  },

  {
    id: 2,
    title: "Facebook 360",
    summary: ["CANOPY", "Back end Dev", 2015],
    img: "asset/images/portfolio-3.jpg",
    desc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tech: ["html", "Ruby on Rail", "css", "javaScript"],
  },

  {
    id: 2,
    title: "Unber Navigation",
    summary: ["CANOPY", "Back end Dev", 2015],
    img: "asset/images/portfolio-4.jpg",
    desc: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    tech: ["html", "css", "javaScript"],
  },
];

// WORK SECTION
// create HTML elements for the Work Section
const work = document.querySelector("#work");

const btnArray = [];

const modal = document.querySelector(".modal");

const popup = document.querySelector(".popup");

const closePopup = document.querySelector("close-popup");

const workContainer = document.createElement("div");

const card = document.createElement("div");
card.className = "work__card";

const cardImage = document.createElement("img");
cardImage.className = "work__card-image card-item";

const cardContent = document.createElement("div");
cardContent.className = "work__card-text-content card-item";

const cardTitle = document.createElement("h3");
cardTitle.className = "work__card-title";

const projectSummary = document.createElement("div");
projectSummary.className = "work__card-info";

const projectDescription = document.createElement("p");
projectDescription.className = "work__card-description description-text";

const badgeContainer = document.createElement("li");
badgeContainer.className = "work__tech work__card-technology-list";

const cardBtn = document.createElement("button");
cardBtn.className = "work__cta btn-primary";

const popupBtnLiveView = document.createElement("button");

const popupBtnSourceView = document.createElement("button");

// Add attributes and append Children to the created elements
// workContainer.className = "container work__container";
// popupBtnLiveView.className = "work__cta btn-primary";
// popupBtnSourceView.className = "work__cta btn-primary";

// Function to create project card
const createProjectCard = (project) => {
  // create HTML elements for the Work Section
  const workContainer = document.createElement("div"),
    card = document.createElement("div"),
    cardImage = document.createElement("img"),
    cardContent = document.createElement("div"),
    cardTitle = document.createElement("h3"),
    projectSummary = document.createElement("div"),
    projectDescription = document.createElement("p"),
    badgeContainer = document.createElement("li"),
    cardBtn = document.createElement("button"),
    popupBtnLiveView = document.createElement("button"),
    popupBtnSourceView = document.createElement("button");

  // Add attributes and append Children to the created elements
  workContainer.className = "container work__container";
  card.className = "work__card";
  cardImage.className = "work__card-image card-item";
  cardContent.className = "work__card-text-content card-item";
  cardTitle.className = "work__card-title";
  projectSummary.className = "work__card-info";
  projectDescription.className = "work__card-description description-text";
  badgeContainer.className = "work__tech work__card-technology-list";
  cardBtn.className = "work__cta btn-primary project-btn";
  cardImage.setAttribute("src", `${project.img}`);
  cardTitle.textContent = `${project.title}`;
  projectDescription.textContent = `${project.desc}`;
  cardBtn.textContent = "See Project";
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(projectSummary);
  cardContent.appendChild(projectDescription);
  cardContent.appendChild(badgeContainer);
  cardContent.appendChild(cardBtn);
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  for (i = 0; i < project.summary.length; i++) {
    const detail = document.createElement("p");
    detail.textContent = project.summary[i];
    projectSummary.appendChild(detail);
  }

  for (i = 0; i < project.tech.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "work__card-technology-item";
    listItem.textContent = project.tech[i];
    badgeContainer.appendChild(listItem);
  }
  workContainer.appendChild(card);
  work.appendChild(workContainer);
  let projectId = project.id;
  btnArray.push(projectId);
  return work;
};

projectsData.forEach((project) => createProjectCard(project));
console.log(btnArray);
// Create Modal and Popup
// Function to create modal card
const createPopupCard = (project) => {
  // create HTML elements for the Work Section

  const popupCard = document.createElement("div");

  const card = document.createElement("div");
  card.className = "popup-card";

  const cardHead = document.createElement("div");
  cardHead.className = "card-header";

  const cardTitle = document.createElement("h3");
  cardTitle.className = "work__card-title";
  cardTitle.textContent = `${project.title}`;

  const projectSummary = document.createElement("div");
  projectSummary.className = "work__card-info";

  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", `${project.img}`);
  cardImage.className = "popup-img";

  const cardContent = document.createElement("div");
  cardContent.className = "work__card-text-content card-item content-card";

  const projectDescription = document.createElement("p");
  projectDescription.className = "work__card-description description-text";
  projectDescription.className = `project-story`;
  projectDescription.textContent = `${project.projectStory}`;

  const extraBox = document.createElement("div");
  extraBox.className = "extra-box";

  const badgeContainer = document.createElement("li");
  badgeContainer.className = "work__tech work__card-technology-list";

  const btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";

  const popupBtnLiveView = document.createElement("button");
  const popupBtnLiveIcon = document.createElement("img");
  popupBtnLiveView.TextContent = "See Live";
  popupBtnLiveView.className = "work__cta btn-primary";
  popupBtnLiveIcon.className = "btnImg";
  popupBtnLiveIcon.setAttribute("src", "asset/images/liveIcon.png");
  popupBtnLiveView.appendChild(popupBtnLiveIcon);

  const popupBtnSourceView = document.createElement("button");
  const popupBtnSourceIcon = document.createElement("img");
  popupBtnSourceView.textContent = "See Source";
  popupBtnSourceView.className = "work__cta btn-primary";
  popupBtnSourceIcon.className = "btnImg";
  popupBtnSourceIcon.setAttribute("src", "asset/images/sourceIcon.png");
  popupBtnSourceView.appendChild(popupBtnSourceIcon);

  // Add attributes and append Children to the created elements

  cardHead.appendChild(cardTitle);
  cardHead.appendChild(projectSummary);
  extraBox.appendChild(badgeContainer);
  extraBox.appendChild(btnContainer);
  btnContainer.appendChild(popupBtnLiveView);
  btnContainer.appendChild(popupBtnSourceView);
  cardContent.appendChild(projectDescription);
  cardContent.appendChild(extraBox);
  card.appendChild(cardHead);
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  for (i = 0; i < project.summary.length; i++) {
    const detail = document.createElement("p");
    detail.textContent = project.summary[i];
    projectSummary.appendChild(detail);
  }

  for (i = 0; i < project.tech.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "work__card-technology-item";
    listItem.textContent = project.tech[i];
    badgeContainer.appendChild(listItem);
  }
  return card;
};

// let popCard = createPopupCard(projectsData[0]);
// console.log(popCard);
let newCard;
work.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("project-btn")) {
    modal.style.display = "block";
    newCard = createPopupCard(projectsData[0]);
    popup.appendChild(newCard);
  }
});

modal.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("close-popup")) {
    newCard.remove();
    modal.style.display = "none";
  }
});
