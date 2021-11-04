const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

const grid = document.querySelector(".grid");

const clearBtn = document.querySelector("button");
clearBtn.addEventListener("click", function() {
    let size = prompt("Enter a grid size between 1 and 100");
    if (size <= 100 && size >= 1) {
        currentSize = size;
        gridSetup(currentSize);
    }
})

gridSetup(currentSize);

function gridSetup(size){
    clearGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener("mouseover", changeColor);
        grid.appendChild(gridElement);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = currentColor;
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}