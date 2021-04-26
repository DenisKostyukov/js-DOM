'use strict';
const imageDB = [
  "https://www.w3schools.com/bootstrap/chicago.jpg",
  "https://www.w3schools.com/bootstrap/ny.jpg",
  "https://www.w3schools.com/bootstrap/la.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
  "https://html5css.ru/css/img_lights.jpg",
  "./assets/images/-jgofxkmtexlfds_uh_c4eklqgu.jpeg",
]

const slider = new Slider(imageDB);
const [nextButton, prevButton] = document.querySelectorAll('.slider-container > button');
const sliderImage = document.querySelector('.slide');

updateView(slider.currentSlide);

function createButton(action = "next") {
  return () => {
    const newImage = slider[action]();
    updateView(newImage);
  }
}
prevButton.addEventListener("click", createButton("prev"));
nextButton.addEventListener("click", createButton("next"));

function updateView(imgLink) {
  sliderImage.setAttribute('src', imgLink);
}
/*Cards*/

const cardContainer = document.getElementById('root');

const cardElement = data.map((place) => createPlaceCards(place));
cardContainer.append(...cardElement)
function createPlaceCards(place) {
  const card = document.createElement('li');
  card.classList.add('cardWrapper');

  const container = document.createElement('article');
  container.classList.add('cardContainer');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('cardImageWrapper');
  imageWrapper.style.backgroundColor = stringToColour(place.name || "");

  const initials = document.createElement('div');
  initials.classList.add('initials');
  initials.append(document.createTextNode(place.name[0] || ""));

  const image = document.createElement('img');
  image.classList.add('cardImage');
  image.src = place.profilePicture;
  imageWrapper.append(initials,image);
  image.hidden = true;
  image.addEventListener('error',handlerImageError )
  image.addEventListener('load',handlerImageLoad )
  
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('contentWrapper');

  const name = document.createElement('h3');
  name.classList.add('cardName');
  name.append(document.createTextNode(place.name || ""));

  const description = document.createElement("p");
  description.classList.add('cardDescription');
  description.append(document.createTextNode(place.description || ""));

  contentWrapper.append(name, description);

  container.append(imageWrapper, contentWrapper);
  card.append(container);

  return card;
}

  function stringToColour(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

/*event listeners*/

function handlerImageError({target}){
  target.remove();
}
function handlerImageLoad({target}){
  target.hidden=false;
}