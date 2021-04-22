'use strict';
const imageDB = [
  "https://www.w3schools.com/bootstrap/chicago.jpg",
  "https://www.w3schools.com/bootstrap/ny.jpg",
  "https://www.w3schools.com/bootstrap/la.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
  "https://html5css.ru/css/img_lights.jpg",
]

const slider = new Slider(imageDB);
const [nextButton, prevButton]= document.querySelectorAll('.slider-container > button');
const sliderImage = document.querySelector('.slide');

nextButton.addEventListener("click", ()=>{
  const newImage = slider.next();
  updateView(newImage);
})

prevButton.addEventListener("click", ()=>{
  const newImage = slider.prev();
  updateView(newImage);
})


function updateView(imgLink){
  sliderImage.setAttribute('src', imgLink);
}