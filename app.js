const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

const grid = document.querySelector(".grid");

const clearBtn = document.querySelector("button.clear");
clearBtn.addEventListener("click", function() {
    clearGrid();
    gridSetup(currentSize);
})

const rainbowBtn = document.querySelector("button.rainbow");
const eraserBtn = document.querySelector(".eraser");
const colorBtn = document.querySelector(".color");
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');
colorBtn.onclick = () => setCurrentMode('color');

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
    } else if (currentMode == "eraser") {
        e.target.style.backgroundColor = "white";
    }
}

function clearGrid() {
    grid.innerHTML = "";
}

function setCurrentMode(newMode) {
    if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    } else if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
    } else if (currentMode === "color") {
        colorBtn.classList.remove('active');
    }

    if (newMode === 'eraser') {
        eraserBtn.classList.add('active');
        currentMode = 'eraser';
    } else if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
        currentMode = 'rainbow';
    } else if (newMode === 'color'){
        colorBtn.classList.add('active');
        currentMode = 'color';
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