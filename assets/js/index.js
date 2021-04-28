'use strict';
const cardsContainer = document.getElementById("root");

const cards = responseData.map((card) => createCard(card));
cardsContainer.append(...cards);

function createCard(card){
  return createElement(
    "li",
    {classNames:["cardWrapper"]},
    createElement(
      "article",
      {classNames:[cardsContainer]},
      createImageWrapper(card),
      createHeader(card)
    )
  )
}

function createCardImage(link) {
  const img = createElement("img", {
    classNames: ["cardImage"],
    handlers: {
      error: handleImageError,
      load: handleImageLoad,
    },
  });
  img.src = link;
  img.hidden = true;

  return img;
}

function createImageWrapper({firstName,lastName, profilePicture}){
  const imageWrapper = createElement(
    "div",
    {classNames:["cardImageWrapper"]},
    createElement(
      "div",
      {classNames:"initials"},
      document.createTextNode(firstName[0] + lastName[0] || ""),
    ),
    createCardImage(profilePicture)
  )
  imageWrapper.style.background = stringToColor(firstName);
  return imageWrapper;
}
function createHeader({firstName, lastName}){
  return createElement(
    "div",
    {
      classNames:["cardHeader"]
    },
    createElement(
      "h3",
      {
        classNames:["userCardName"],
      },
      document.createTextNode(`${firstName} ${lastName}` || "")
    )
  )
}
/**
 *
 * @param {string} tagName
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {object} options.handlers - event handlers
 * @param  {...Node} children
 * @returns {HTMLElement}
 */
 function createElement(
  tagName, {
    classNames = [],
    handlers = {},
    attributes = {},
  } = {},
  ...children
) {
  const elem = document.createElement(tagName);
  elem.classList.add(...classNames);

  for(const [attrName, attrValue] of Object.entries(attributes)){
    elem.setAttribute(attrName,attrValue);
  }

  for (const [eventType, eventHandler] of Object.entries(handlers)) {
    elem.addEventListener(eventType, eventHandler);
  }

  elem.append(...children);
  return elem;
}

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({ target }) {
  target.hidden = false;
}

function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}