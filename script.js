/* 
tutorial p5.js continuous lines drawing 
https://editor.p5js.org/p5/sketches/Drawing:_Continuous_Lines
*/

// https://www.w3schools.com/colors/ 
let colors = ['black', 'red', 'green', 'blue', 'purple'];
let currentColorIndex = 0; 
let currentColor = colors[currentColorIndex]; 

function setup() {
  // https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Basic_usage
  createCanvas(400, 300);
  background(220);
}

function draw() {
  // Draws continuous lines when the mouse is pressed - https://www.w3schools.com/jsref/obj_mouseevent.asp
  if (mouseIsPressed) {
    //change the colour
    stroke(currentColor);
    strokeWeight(2); // setting line in 2 weight.
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

// friend helped me...
function changeColor() {
  // this one too... 
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  currentColor = colors[currentColorIndex];
}

// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp (W3Schools)
document.addEventListener('DOMContentLoaded', function() {
  let colorButton = document.getElementById('colorButton');
  if (colorButton) {
    colorButton.addEventListener('click', changeColor);
  }
});
