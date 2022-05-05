
let PARENT_ID = 'p5-canvas-container';

let canvas;

function setup() {
  let parentStyle = window.getComputedStyle(document.getElementById(PARENT_ID));
  canvas = createCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
  canvas.parent(PARENT_ID);

  render();
}


function windowResized() {
  let parentStyle = window.getComputedStyle(document.getElementById(PARENT_ID));
	resizeCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
	render();
}



// A single simulation step
function tick(){

}


function draw(){
  tick();
  render();
}


function render()
{
  background(BG_COL);
}

function mousePressed(){
  console.log("Mouse pressed at position " + mouseX + ", " + mouseY)
}