'use strict';

const form = document.getElementById('root');
const inputValues = [];
const values = document.getElementById("root-list");
form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const {target, target:{elements:{email}}} = event;
  inputValues.push(email.value);
  target.reset();
  values.append(createListItem(email.value))
})

function createListItem(value){
  const listItem = document.createElement("li");
  listItem.innerText= value;
  return listItem;
}


