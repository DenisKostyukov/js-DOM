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
const [nextButton, prevButton]= document.querySelectorAll('.slider-container > button');
const sliderImage = document.querySelector('.slide');

updateView(slider.currentSlide);

function createButton(action = "next"){
  return () =>{
    const newImage = slider[action]();
    updateView(newImage);
  }
}
prevButton.addEventListener("click", createButton("prev"));
nextButton.addEventListener("click", createButton("next"));

function updateView(imgLink){
  sliderImage.setAttribute('src', imgLink);
}
