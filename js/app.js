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

// Work Section

// Data for work Section
 
const projectData = [
  {
    id: 1,
    name: "PROJECT 1",
    detail: ["CANOPY", ".", "Back end Dev", ".", 2015],
    img: "./asset/images/portfolio-1.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tech: ["html", "css", "javaScript"],
    site: "https://kolakolade.me/project1",
    repo: "https://github.com/kolakolade/project1",
  },
  {
    id: 2,
    name: "PROJECT 2",
    detail: ["CANOPY", "Back end Dev", 2015],
    img: "./asset/images/portfolio-2.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tech: ["html", "css", "javaScript"],
    site: "https://kolakolade.me/project2",
    repo: "https://github.com/kolakolade/project2",
  },
  {
    id: 3,
    name: "PROJECT 3",
    detail: ["CANOPY", ".", "Back end Dev", ".", 2015],
    img: "./asset/images/portfolio-3.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    detailDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia commodi molestias vero porro beatae provident blanditiis odit voluptas autem modi praesentium, sapiente, animi ullam placeat temporibus voluptatem eaque illum? Ullam consectetur et quisquam reiciendis dolorem dolorum quidem, ipsum consequuntur, ducimus labore vitae tenetur! Sapiente quaerat inventore corrupti voluptatum eveniet, voluptas provident perferendis doloribus ut dolore voluptatem non autem praesentium repellat voluptatibus, laborum temporibus saepe commodi quisquam corporis error molestias atque cum eius! Ipsam facilis autem temporibus deserunt voluptas, tempore quam vel. Eligendi, perspiciatis provident optio cum odit quo vero et itaque tempora veniam id neque est voluptates reiciendis quisquam nam doloribus aspernatur minus quis ut earum impedit aliquid dignissimos? Eaque, itaque eum! Nihil tempore, fuga, odio accusantium dolore reiciendis perspiciatis sapiente nobis repellendus quam consequatur magnam suscipit? Aliquam at expedita ex in laborum? Obcaecati amet incidunt tempora sequi. Doloremque, aliquid qui? Reiciendis unde aliquam quidem enim praesentium, vitae nemo?',
    tech: ["html", "css", "javaScript"],
    site: "https://kolakolade.me/project3",
    repo: "https://github.com/kolakolade/project3",
  },
  {
    id: 4,
    name: "PROJECT 4",
    detail: ["CANOPY", ".", "Back end Dev", ".", 2015],
    img: "./asset/images/portfolio-4.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    detailDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia commodi molestias vero porro beatae provident blanditiis odit voluptas autem modi praesentium, sapiente, animi ullam placeat temporibus voluptatem eaque illum? Ullam consectetur et quisquam reiciendis dolorem dolorum quidem, ipsum consequuntur, ducimus labore vitae tenetur! Sapiente quaerat inventore corrupti voluptatum eveniet, voluptas provident perferendis doloribus ut dolore voluptatem non autem praesentium repellat voluptatibus, laborum temporibus saepe commodi quisquam corporis error molestias atque cum eius! Ipsam facilis autem temporibus deserunt voluptas, tempore quam vel. Eligendi, perspiciatis provident optio cum odit quo vero et itaque tempora veniam id neque est voluptates reiciendis quisquam nam doloribus aspernatur minus quis ut earum impedit aliquid dignissimos? Eaque, itaque eum! Nihil tempore, fuga, odio accusantium dolore reiciendis perspiciatis sapiente nobis repellendus quam consequatur magnam suscipit? Aliquam at expedita ex in laborum? Obcaecati amet incidunt tempora sequi. Doloremque, aliquid qui? Reiciendis unde aliquam quidem enim praesentium, vitae nemo?',
    tech: ["html", "css", "javaScript"],
    site: "https://kolakolade.me/project4",
    repo: "https://github.com/kolakolade/project4",
  },
];

// Dynamically generating the work section
const work = document.querySelector("#work");

// Create a function to build a project card

const buildProjectCard = (project) => {
  // Create required html elements for the project card
  const containerDiv = document.createElement("div");
  const cardContainer = document.createElement("div");
  const cardImage = document.createElement("img");
  const projectDetailContainer = document.createElement("div");
  const cardHead =document.createElement('div');
  const cardTitle = document.createElement("h3");
  const summary = document.createElement("div");
  const summaryMarker = document.createElement("div");
  const cardDescription = document.createElement("p");
  const techList = document.createElement("ul");
  const cardButton = document.createElement("button");

  // Add content and attributes to the created elements
  containerDiv.className = "container work__container";
  cardContainer.className = "work__card";
  cardImage.className = "work__card-image card-item";
  projectDetailContainer.className = "work__card-text-content card-item";
  cardTitle.className = "work__card-title";
  summary.className = "work__card-info";
  summaryMarker.className = "marker";
  cardDescription.className = "work__card-description";

  // cardBodyDiv.className = "work__card-text-content card-item"; //what is this
  techList.className = "work__card-technology-list";
  cardButton.className = "work__cta btn-primary";
  cardButton.id = project.id
  cardButton.textContent = "See Project";

  cardHead.appendChild(cardTitle);
  cardHead.appendChild(summary);
  projectDetailContainer.appendChild(cardHead);
  projectDetailContainer.appendChild(cardDescription);
  projectDetailContainer.appendChild(techList);
  projectDetailContainer.appendChild(cardButton);
  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(projectDetailContainer);
  containerDiv.appendChild(cardContainer);

  // Add content dynamically to the html document
  cardImage.setAttribute("src", `${project.img}`);
  cardTitle.textContent = project.name;
  cardDescription.textContent = project.desc;

  for (let i = 0; i < project.detail.length; i++) {
    const detail = document.createElement("p");
    detail.textContent = project.detail[i];
    summary.appendChild(detail);
  }

  for (let j = 0; j < project.tech.length; j++) {
    const listItem = document.createElement("li");
    listItem.className = "work__card-technology-item";
    listItem.textContent = project.tech[j];
    techList.appendChild(listItem);
  }

  // Append the card to the DOM
  return work.appendChild(containerDiv);
};

  projectData.forEach(project => {
  buildProjectCard(project);
})

// Create a function to build a modal card
const buildModalCard = (project) => {
  // Create required html elements for the project card
  const modalContainerDiv = document.createElement("div");
  const modalCardContainer = document.createElement("div");
  const cardImage = document.createElement("img");
  const projectDetailContainer = document.createElement("div");
  const cardHead =document.createElement('div');
  const cardTitle = document.createElement("h3");
  const summary = document.createElement("div");
  const summaryMarker = document.createElement("div");
  const cardDescription = document.createElement("p");
  const techList = document.createElement("ul");

  // Elements needed for pop up
  const genericContainer = document.createElement("div");
  const btnContainer = document.createElement('div');
  const seeLive = document.createElement('button');
  const seeSource = document.createElement('button');
  const imgLive = document.createElement('img');
  const imgSource = document.createElement('img');


  // Add content and attributes to the created elements
  modalContainerDiv.className = "modal__container";
  modalCardContainer.className = "modal__card";
  cardImage.className = "modal__card-image card-item";
  projectDetailContainer.className = "modal__card-text-content card-item";
  cardTitle.className = "work__card-title";
  summary.className = "work__card-info";
  summaryMarker.className = "marker";
  cardDescription.className = "modal__card-description";
  btnContainer.className = 'btn-container';
  techList.className = "work__card-technology-list";
  imgLive.setAttribute('src', ('./asset/images/liveIcon.png'))
  imgSource.setAttribute('src', ('./asset/images/sourceIcon.png'))

  seeLive.className = "work__cta btn-primary";
  seeSource.className = "modal__cta btn-primary popup-btn";
  seeLive.textContent = "See Live";
  seeSource.textContent = "See Source";
  imgLive.className = 'popup-btn-img';
  imgSource.className = 'popup-btn-img';
  cardHead.appendChild(cardTitle);
  cardHead.appendChild(summary);
  seeLive.appendChild(imgLive);
  seeSource.appendChild(imgSource);
  genericContainer.appendChild(techList)
  genericContainer.appendChild(btnContainer)
  btnContainer.appendChild(seeLive)
  btnContainer.appendChild(seeSource)
  projectDetailContainer.appendChild(cardDescription);
  projectDetailContainer.appendChild(genericContainer);
  modalCardContainer.appendChild(cardHead);
  modalCardContainer.appendChild(cardImage);
  modalCardContainer.appendChild(projectDetailContainer);
  modalContainerDiv.appendChild(modalCardContainer);

  // Add content dynamically to the html document
  cardImage.setAttribute("src", `${project.img}`);
  cardTitle.textContent = project.name;
  cardDescription.textContent = project.desc;

  for (let i = 0; i < project.detail.length; i++) {
    const detail = document.createElement("p");
    detail.textContent = project.detail[i];
    summary.appendChild(detail);
  }

  for (let j = 0; j < project.tech.length; j++) {
    const listItem = document.createElement("li");
    listItem.className = "work__card-technology-item";
    listItem.textContent = project.tech[j];
    techList.appendChild(listItem);
  }

  // Append the card to the DOM
  return modalContainerDiv;
};

// Append card to Modal


