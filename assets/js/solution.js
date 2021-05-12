'use strict';
const regexp =/^\d+$/;
const regexpName = /^[a-z][a-z0-9_]{6,16}$/;
function valideName(name){
  if(regexpName.test(name)){
    return "Success";
  }
  else throw new Error();
}