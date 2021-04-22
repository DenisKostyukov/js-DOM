function makeCounter() {
  let count = 0;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    }
  }
}
const counter1 = makeCounter();
const counter2 = makeCounter();

function createAdder(n) {
  return (m) => {
    return n += m;
  }
}
const adder = createAdder(10);