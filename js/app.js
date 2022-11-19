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
const err = document.querySelector('.submit-error');

contactSubmit.addEventListener('click', validateEmail);

function validateEmail(e) {
  const emailValue = e.target.value;
  console.log(emailValue);
  e.preventDefault(); 
  
  if(emailValue.match(regEx)){
    error.style.display = 'none';
    email.style.border = '1px solid #d0d9d4';
    return true;
  }
  else {
    error.style.display = 'block';
    error.innerHTML = 'Email should only contain lowercase letters';
    email.style.border = '1px solid rgb(204, 11, 11)';
    return false;
  }
}


// Create Modal and Popup
// Function to create modal card
const createPopupCard = (project) => {
  // create HTML elements for the Work Section
  const popupCard = document.createElement("div"),
    card = document.createElement("div"),
    cardHead = document.createElement("div"),
    cardTitle = document.createElement("h3"),
    projectSummary = document.createElement("div"),
    cardImage = document.createElement("img"),
    cardContent = document.createElement("div"),
    projectDescription = document.createElement("p"),
    extraBox = document.createElement("div"),
    badgeContainer = document.createElement("li"),
    btnContainer = document.createElement("div"),
    popupBtnLiveView = document.createElement("button"),
    popupBtnSourceView = document.createElement("button");
  // Add attributes and append Children to the created elements
  card.className = "popup-card";
  cardHead.className = "card-header";
  cardImage.className = "popup-img";
  cardContent.className = "work__card-text-content card-item content-card";
  cardTitle.className = "work__card-title";
  projectSummary.className = "work__card-info";
  projectDescription.className = "work__card-description description-text";
  extraBox.className = "extra-box";
  badgeContainer.className = "work__tech work__card-technology-list";
  btnContainer.className = "btn-container";
  // cardBtn.className = "work__cta btn-primary";
  popupBtnLiveView.textContent = "See Live";
  popupBtnLiveView.className = "work__cta btn-primary";
  popupBtnSourceView.textContent = "See Source";
  popupBtnSourceView.className = "work__cta btn-primary";
  cardImage.setAttribute("src", `${project.popupimg}`);
  cardTitle.textContent = `${project.title}`;
  projectDescription.className = `project-story`;
  projectDescription.textContent = `${project.projectStory}`;
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
work.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("project-btn")) {
    modal.style.display = "block";
    let newCard = createPopupCard(projectsData[0]);
    popup.appendChild(newCard);
    console.log(newCard);
  }
});
modal.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("close-popup")) {
    modal.style.display = "none";
  }
})

const modal = document.querySelector('.modal-container');

projectData.forEach(project=>{
  modal.appendChild(
  `<div class="card" id="popup">
  <div class="card-header">
    <h3 class="modal-project-title"></h3>
    <ul class="companies">
      <li>${project.detail[0]}</li>
      <li>${project.detail[1]}</li>
      <li>${project.detail[2]}</li> 
      <li>${project.detail[3]}</li>
      <li>${project.detail[4]}</li>
    </ul>
    <div class="close-icon closeModal" onclick="closePopUp()"> <i class="fa-solid fa-times"></i></div>
  </div>
  <div class="card-body">
    <img class="project-image" src=${project.img} alt="">
  </div>
  <div class="card-description-container">
    <div class="card-description">
      <p class="modal-project-description">${project.desc}</p>
    </div>
    <div class="card-language-buttons">
      <div class="card-languages">
        <ul class="languages-used">
          <li>${project.tech[0]}</li>
          <li>${project.tech[1]}</li>
          <li>${project.tech[2]}</li>
        </ul>
      </div>
      <div class="button-container">
      <button onclick="${project.repo}" type="button" class="btn">see live <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></button>
      <button onclick="${project.site}" type="button" class="btn">see source <span> <i class="fa-brands fa-github"></i></button>
      </div>
    </div>
  </div>
</div>`
)});

const myModal = document.querySelector('#myModal');
function openPopUp() {
  myModal.classList.add('open-popup');
}
function closePopUp() {
  myModal.classList.remove('open-popup');
}
