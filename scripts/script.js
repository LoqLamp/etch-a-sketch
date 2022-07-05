let sliderValue = document.getElementById("slider-value");
sliderValue.addEventListener("input", () => {
  let sliderOutput = document.getElementById("slider-output");
  sliderOutput.textContent = sliderValue.value + " X " + sliderValue.value;
});

let confirmButton = document.getElementById("confirm-button");
confirmButton.addEventListener("click", buildCanvas);

function buildCanvas() {
  let canvas = document.querySelector(".canvas");
  let buildCanvasSize = sliderValue.value;
  let canvasSize = buildCanvasSize * buildCanvasSize;
  for (let i = 0; i < canvasSize; i++) {
    cDiv = document.createElement("div");
    cDiv.classList.add("canvas-div");
    canvas.appendChild(cDiv);
  }
}
