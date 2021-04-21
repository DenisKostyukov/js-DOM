'use strict';
const firstButton = document.querySelector('button');
function alertOnClick() {
  alert("Success");
}
firstButton.addEventListener('click',alertOnClick)

const mainSection = document.querySelector('.main-section');
console.log(mainSection)

const buttons = document.querySelectorAll('.main-button');
buttons.forEach((elem) =>{
  elem.addEventListener('click',alertOnClick)
})

const paragraph = document.querySelector('#unique');
console.log(paragraph)