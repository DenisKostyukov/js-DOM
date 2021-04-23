const [btn1, btn2] = document.querySelectorAll('.button');
/*const btnEnterHandler = () =>{
  const temp = btn1.innerText;
  btn1.innerText=btn2.innerText;
  btn2.innerText=temp;
}
  btn1.addEventListener('mouseenter', btnEnterHandler)
  btn2.addEventListener('mouseenter', btnEnterHandler)*/
  const btnEnterHandler = () =>{
    [btn1.innerText, btn2.innerText] = [btn2.innerText, btn1.innerText]
  }
  btn1.addEventListener('mouseenter', btnEnterHandler)
  btn2.addEventListener('mouseenter', btnEnterHandler)