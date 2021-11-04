const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

const grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;

for (let i = 0; i < currentSize * currentSize; i++) {
    const gridElement = document.createElement('div');
    gridElement.addEventListener("mouseover", changeColor);
    grid.appendChild(gridElement);
}

function changeColor(e) {
    e.target.style.backgroundColor = currentColor;
}