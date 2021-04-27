'use strict';

const form = document.getElementById('root');
const values = document.getElementById("root-list");
const inputValues = [];
const submit = (event) => {
  event.preventDefault();
  const {
    target,
    target: {
      elements: {
        email
      }
    }
  } = event;
  if(email.value){
    inputValues.push(email.value);
    console.log(inputValues)
    values.append(createListItem(email.value, inputValues.length-1));
    target.reset();
  }
  else{
    alert('Форма пустая');
  } 
}
form.addEventListener("submit", submit);

function createListItem(value, id) {
  const listItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.id=id;
  deleteBtn.addEventListener("click", deleteListItem);
  deleteBtn.append(document.createTextNode("Delete"));
  listItem.append(document.createTextNode(value),deleteBtn);
  return listItem;
}
 function deleteListItem({target}){
  target.parentNode.parentNode.removeChild(target.parentNode);
  inputValues.splice(target.id,1);
  const btn = document.getElementsByClassName("deleteBtn");
  console.log(inputValues)
  for(let i=0;i<inputValues.length;i++){
    btn[i].id=i;
  }
 }
 