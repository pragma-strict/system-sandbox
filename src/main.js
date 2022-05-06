/*

*/

// DOM Ids and elements
let ID_PARENT = 'p5-canvas-container';
let INTERFACE_DATA;

let canvas;

let inputRaw = [];


function setup() {
  INTERFACE_DATA = document.getElementById('interface-data');
  initializeP5Canvas();
  world = new World();
}


function initializeP5Canvas(){
  canvas = createCanvas(window.innerWidth, window.innerHeight)
}


function updateCanvasSize(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}


function draw(){
  background(GRAY_DARK);
  world.drawGrid();
}


function getInput(){
  inputRaw = [];
  parseInputData();
}


// Read input data from DOM and store it into the input array
function parseInputData(){
  let rawData = INTERFACE_DATA.value;
  let number = 0;
  let isPrevCharNumber = false;
  for(let i = 0; i < rawData.length; i++){
    let char = rawData[i];
    if(!isNaN(char) && char != ' '){ // Current char is a number
      char = parseInt(char);
      if(isPrevCharNumber){
        number *= 10;
      }
      number += char;
      isPrevCharNumber = true;
    }
    else{   // Current char is NOT a number
      if(isPrevCharNumber){
        inputRaw.push(number);
        number = 0;
        isPrevCharNumber = false;
      }
    }
  }
  // If the string ended on a number, include it too.
  if(isPrevCharNumber){
    inputRaw.push(number);
  }
}


function mousePressed(){
  world.mousePressed();
}


function mouseReleased(){
  world.mouseReleased();
}


// Reposition the origin
function mouseDragged(){
  world.mouseDragged();
}


function windowResized() {
  updateCanvasSize();
}