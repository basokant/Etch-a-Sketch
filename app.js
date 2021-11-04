const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

const grid = document.querySelector(".grid");

const clearBtn = document.querySelector("button.clear");
clearBtn.addEventListener("click", function() {
    // let size = parseInt(prompt("Enter a grid size between 1 and 100"));
    // if (size <= 100 && size >= 1) {
        // currentSize = size;
        clearGrid();
        gridSetup(currentSize);
    // }
})

const rainbowBtn = document.querySelector("button.rainbow");
rainbowBtn.onclick = () => setCurrentMode('rainbow');

const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value)

gridSetup(currentSize);

function gridSetup(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener("mouseover", changeColor);
        grid.appendChild(gridElement);
    }
}

function changeColor(e) {
    if (currentMode == "color") {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode == "rainbow") {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
}

function clearGrid() {
    grid.innerHTML = "";
}

function setCurrentMode(newMode) {
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
        currentMode = "color";
    } else if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
        currentMode = 'rainbow';
    }
}

function updateSizeValue(size) {
    sizeValue.innerText = `${size} x ${size}`;
}

function changeSize(size) {
    clearGrid();
    gridSetup(size);
    currentSize = size;
    updateSizeValue(size);
}