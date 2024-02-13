const calcAreaDisplay = document.getElementById('calcDisplay');
const triangleCard = document.getElementById('triangle-card');
triangleCard.addEventListener('mouseenter', () => {
  triangleCard.style.backgroundColor = '#FBBCED';
})

triangleCard.addEventListener('mouseleave', () => {
  triangleCard.style.backgroundColor = '#fff';
})



function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const input = parseFloat(inputField.value);
  return input;
}

function setInnerTextById(elementId, text) {
  const element = document.getElementById(elementId);
  element.innerText = text;
}

// calculating triangle
function calculateTriangleArea() {
  const base = getInputValueById('triangle-base');
  const height = getInputValueById('triangle-height');

  const area = 0.5 * base * height;
  // display triangle area
  setInnerTextById('triangle-area', area);

  const areaResult = document.createElement('p');
  areaResult.textContent = `1. Triangle  -  ${area}`;
  calcAreaDisplay.appendChild(areaResult);

}

// calculating rectangle
function calculateRectangleArea() {
  // get width input
  const width = getInputValueById('rectangle-width');

  // get length input
  const length = getInputValueById('rectangle-length');

  const area = width * length;

  // display rectangle area
  setInnerTextById('rectangle-area', area);

  const areaResult = document.createElement('p');
  areaResult.textContent = `2. Rectangle  -  ${area}`;
  calcAreaDisplay.appendChild(areaResult);
}

// calculating parallelogram
function calculateParallelogramArea() {
  // get base input
  const base = getInputValueById('parallelogram-base');

  // get height input
  const height = getInputValueById('parallelogram-height');

  const area = base * height;

  // display rectangle area
  setInnerTextById('parallelogram-area', area);

  const areaResult = document.createElement('p');
  areaResult.textContent = `3. Parallelogram  -  ${area}`;
  calcAreaDisplay.appendChild(areaResult);
}

// calculating Rhombus
function calculateRhombusArea() {
  // get base input
  const d1 = getInputValueById('rhombus-dimension1');
  // get height input
  const d2 = getInputValueById('rhombus-dimension2');

  const area = 0.5 * d1 * d2;

  // display rectangle area
  setInnerTextById('rhombus-area', area)

  const areaResult = document.createElement('p');
  areaResult.textContent = `4. Rhombus  -  ${area}`;
  calcAreaDisplay.appendChild(areaResult);
}

// calculating Pentagon
function calculatePentagonArea() {
  const perimeter = getInputValueById('pentagon-perimeter');
  const apothem = getInputValueById('pentagon-apothem');

  const area = 0.5 * perimeter * apothem;

  // display Pentagon area
  setInnerTextById('pentagon-area', area)

  const areaResult = document.createElement('p');
  areaResult.textContent = `5. Pentagon  -  ${area}`;
  calcAreaDisplay.appendChild(areaResult);
}
   
// calculating ellipse
function calculateEllipseArea() {
  // get a input
  const a = getInputValueById('ellipse-a');

  // get height input
  const b = getInputValueById('ellipse-b');

  const area = 3.14 * a * b;

  // display ellipse area
  setInnerTextById('ellipse-area', area)
}