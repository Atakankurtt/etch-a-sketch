const container = document.getElementById('container');
const button = document.getElementById('restarter');

function grid(param = 16) {
  for (let i = 0; i < param**2; i++) {
  let iDiv = document.createElement('div');
  iDiv.id = 'block';
  container.appendChild(iDiv);
  }
}

function getInput() {
  userChoice = prompt("How many squares per side to make the new grid.");
  if (validInput(userChoice)) {
    return Number(userChoice);
  } else {
    alert("Valid input! It has to be between 0 and 100.");
    getInput();
  }
}

function paint(element) {
  element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = "black";
  })
}

function validInput(param) {
  if (param <= 100 && param > 0) {
    return true;
  }
  return false;
}

button.addEventListener("click", () => { //clean this code
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  let size = getInput()
  grid(size);
  let blocks = document.querySelectorAll("[id='block']");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  blocks.forEach(paint);
});



grid();
let blocks = document.querySelectorAll("[id='block']");
blocks.forEach(paint);