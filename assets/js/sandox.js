const btns = document.querySelectorAll('button');
/*btn.addEventListener('click', ({
  target
}) => {
  target.style.backgroundColor = 'red';
})*/
const getColor = ({
  target: {
    parentNode,
    dataset: {
      color
    }
  }
}) => {
    parentNode.style = `background-color: ${color}`;
};
for (const btn of btns) {
  btn.addEventListener('click', getColor)
}