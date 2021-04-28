const testObj ={
  foo:"bar",
  sum(a, b){
    console.log(this)
  }
}
const sum2 = testObj.sum.bind();