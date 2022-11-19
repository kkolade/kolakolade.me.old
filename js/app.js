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
    popupimg: "asset/images/facebook-project.png",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    projectStory:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas consequuntur esse distinctio atque! Quos voluptatem, aut qui provident repudiandae corrupti repellat tempora veritatis ut enim ipsam odio a dolores natus doloremque nam ad eius! Voluptate, unde omnis.",
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
const work = document.querySelector("#work"),
  modal = document.querySelector(".modal"),
  popup = document.querySelector(".popup"),
  closePopup = document.querySelector("close-popup"),
  workContainer = document.createElement("div"),
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
cardBtn.className = "work__cta btn-primary";
popupBtnLiveView.className = "work__cta btn-primary";
popupBtnSourceView.className = "work__cta btn-primary";

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
  cardBtn.textContent = "See Projct";
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
  return work;
};

projectsData.forEach((project) => createProjectCard(project));
