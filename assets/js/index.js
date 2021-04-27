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

  const initials = createElement("div", {
    classNames: ["initials"]
  }, document.createTextNode(place.name[0] || ""));

  const image = createElement("img", {
    classNames: ["cardImage"],
    handlers: {
      error: handlerImageError,
      load: handlerImageLoad
    },
  })
  image.src = place.profilePicture;
  image.hidden = true;

  const name = createElement("h3", {
    classNames: ["cardName"]
  }, document.createTextNode(place.name || ""))

  const description = createElement("p", {
    classNames: ["cardDescription"]
  }, document.createTextNode(place.description || ""))

  const imageWrapper = createElement("div", {
    classNames: ["cardImageWrapper"]},
    initials, image,
  )
  imageWrapper.style.backgroundColor = stringToColour(place.name || "");

  const contentWrapper = createElement("div", {
    classNames: ["contentWrapper"]},
    name, description
  )
  const container = createElement("article", {
    classNames: ["cardContainer"]},
    imageWrapper, contentWrapper
  )
  const card = createElement("li", {
    classNames: ["cardWrapper"]
  },container);

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

function createElement(type, {
  classNames = [],
  handlers = {}
}, ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);

  for (const [eventType, eventHandler] of Object.entries(handlers)) {
    elem.addEventListener(eventType, eventHandler);
  }
  elem.append(...children);
  return elem;
}

/*event listeners*/

function handlerImageError({
  target
}) {
  target.remove();
}

function handlerImageLoad({
  target
}) {
  target.hidden = false;
}