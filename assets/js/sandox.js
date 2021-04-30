
const counter= ()=>{
  let i = 0;
    const id = setInterval(()=>{
      i++
      if(i===20){
        clearInterval(id)
      }
      console.log(i)
    },500);

}

