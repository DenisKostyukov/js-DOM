'use strict';
const cardsContainer = document.getElementById("root");
fetch('../data.json')
  .then((response) => response.json())
  .then((data) => {
    const cards = data.map((card) => createCard(card));
    cardsContainer.append(...cards)
  })
  .catch((error) => {
    console.log(error)
  });

function createCard(card) {
  return createElement(
    "li", {
      classNames: ["cardWrapper"]
    },
    createElement(
      "article", {
        classNames: ["cardContainer"]
      },
      createImageWrapper(card),
      createcardContent(card),
      createIcons(card)
    )
  )
}

function createCardImage(link){
  const img = createElement("img", {
    classNames: ["cardImage"],
  });
  img.src = link;
  img.hidden = true;

  return new Promise((resolve, reject)=>{
    img.addEventListener("load",()=>{
      resolve(img)
      img.hidden = false;
    })
    img.addEventListener("error",()=>{
      img.remove();
      reject(new Error("error"))
    })
  });
  
}

function createImageWrapper({
  firstName,
  lastName,
  profilePicture
}) {
  const imageWrapper = createElement(
    "div", {
      classNames: ["cardImageWrapper"]
    },
    createElement(
      "div", {
        classNames: ["initials"]
      },
      document.createTextNode(firstName[0] + lastName[0] || ""),
    ),
    createCardImage(profilePicture)
    .then((img)=>{
      imageWrapper.append(img)
    })
    .catch((error)=>{
      console.log(error)
    })

  )
  imageWrapper.style.background = stringToColor(firstName);
  return imageWrapper;
}

function createcardContent({
  firstName,
  lastName
}) {
  const fullName = `${firstName} ${lastName}`;
  return createElement(
    "div", {
      classNames: ["cardContent"]
    },
    createElement(
      "h3", {
        classNames: ["userCardName"],
      },
      document.createTextNode(fullName.trim() != "" ? fullName : "")
    ), createElement(
      "p", {
        classNames: ["cardDescription"],
      },
      document.createTextNode("Description")
    )
  )
}

function createIcons({
  contacts
}) {
  let links = []
  for (let i = 0; i < contacts.length; i++) {
    links[i] = createElement(
      "a", {
        classNames: ["cardLink"],
        attributes: {
          href: contacts[i],
          target: "_blank",
        },
      },
      createElement(
        "i", {
          classNames: ["fab", getSocial(contacts)[i]],
        }
      )
    );
  }
  const icons = createElement(
    "div", {
      classNames: ["icons"]
    },
    ...links
  );

  return icons;
}

function getSocial(links) {
  let className = [];
  for (let i = 0; i < links.length; i++) {
    const socialLink = new URL(links[i]);
    if (socialLink.hostname === "www.facebook.com") {
      className.push("fa-facebook-f");
    }
    if (socialLink.hostname === "www.instagram.com") {
      className.push("fa-instagram");
    }
    if (socialLink.hostname === "twitter.com") {
      className.push("fa-twitter");
    }
    if (socialLink.hostname === "dribbble.com") {
      className.push("fa-dribbble");
    }
    if (socialLink.hostname === "www.linkedin.com") {
      className.push("fa-linkedin-in");
    }
  }
  return className;
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

  for (const [attrName, attrValue] of Object.entries(attributes)) {
    elem.setAttribute(attrName, attrValue);
  }

  for (const [eventType, eventHandler] of Object.entries(handlers)) {
    elem.addEventListener(eventType, eventHandler);
  }

  elem.append(...children);
  return elem;
}

function handleImageError({
  target
}) {
  target.remove();
}

function handleImageLoad({
  target
}) {
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