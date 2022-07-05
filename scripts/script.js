let sliderValue = document.getElementById("slider-value");
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
}
