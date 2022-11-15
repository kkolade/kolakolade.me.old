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
    name: 'TONIC',
    companies: ['CANOPY',  'Back end Dev',  2015],
    img: 'asset/images/twitter.png',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the',
    technologies: ['html', 'css', 'javaScript']
  },

  {
    id: 2,
    name:'TONIC',
    companies: ['CANOPY',  'Back end Dev',  2015],
    img: 'asset/images/twitter.png',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the',
    technologies: ['html', 'css', 'javaScript']
  },
];

// WORK SECTION
const work = document.querySelector("#work");

document.addEventListener("DOMContentLoaded", () => {
  // create the head
  const containerDiv = document.createElement("div");
  containerDiv.classList.add('work__card');
  const headDiv = document.createElement("div");

  const bodyDiv = document.createElement("div");
  const headline = document.createElement("h3");
  headline.classList.add('work__card-title');
  // const closeButton = document.createElement("");
  const list = document.createElement("ul");
  list.classList.add('work__card-technology-list');
  const headImage = document.createElement("img");

  containerDiv.classList.add("work__project");
  containerDiv.appendChild(headDiv);
  headDiv.appendChild(headline);
  // headDiv.appendChild('closeButton')
  headDiv.appendChild(list);

  containerDiv.appendChild(bodyDiv);
  console.log(containerDiv);
  work.appendChild(containerDiv);

  
for(let i = 0; i < 5; i++) {
  const listItems = document.createElement('li');
  
  listItems.innerText = data[0].companies[i];
  listItems.classList.add('work__card-technology-item');
  list.appendChild(listItems);
}
headline.innerText = data[0].name;
});
