let sliderValue = document.getElementById("slider-value");
let greenButton = document.getElementById("green-button");

greenButton.onclick = () => {
  return greenButton === true ? (greenButton = false) : (greenButton = true);
};

sliderValue.addEventListener("input", () => {
  let sliderOutput = document.getElementById("slider-output");
  sliderOutput.textContent = sliderValue.value + " X " + sliderValue.value;
});

let confirmButton = document.getElementById("confirm-button");
confirmButton.addEventListener("click", removeGrid);

function removeGrid() {
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.firstChild);
  }
  buildCanvas();
}

function buildCanvas() {
  let canvas = document.getElementById("canvas");
  canvas.style.setProperty("--grid-size", sliderValue.value);
  let buildCanvasSize = sliderValue.value;
  let canvasSize = buildCanvasSize * buildCanvasSize;
  for (let i = 0; i < canvasSize; i++) {
    canvasDiv = document.createElement("div");
    canvasDiv.classList.add("canvas-div");
    canvas.appendChild(canvasDiv);
  }
  addMouseListeners();
}

function addMouseListeners() {
  let canvasDivEvent = document.querySelectorAll(".canvas-div");
  canvasDivEvent.forEach((elements) => {
    elements.addEventListener("mouseover", changeDivClass);
  });
}

function changeDivClass(something) {
  if (greenButton === true) {
    something.target.className = "canvas-div";
    something.target.classList.add("canvas-div-green");
  } else {
    something.target.className = "canvas-div";
    something.target.classList.add("canvas-div-after");
  }
}
