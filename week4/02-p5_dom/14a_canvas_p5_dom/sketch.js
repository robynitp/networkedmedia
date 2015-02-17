/* 
---------------
  jsfiddle version: http://jsfiddle.net/rover/0r7ydo1s/
--------------- 
*/
var canvas;
var sliderElement;
// canvas w x h
var canvasW = 600;
var canvasH = 400;

function setup() {

	canvas = createCanvas(canvasW,canvasH);
	// put the canvas in the <div> with id "canvas-container" (see html)
	canvas.parent('canvas-container');
	// createSlider(lowValue,highValue,width)
	sliderElement = createSlider(10,canvasW - 20,canvasW/4);
	sliderElement.size(canvasW - 20);
	// put the slider in the <div> with id "slider-container"
	sliderElement.parent('slider-container');
}


function draw() {

	console.log('draw!');
	
	// background
	background(42, 169, 217);

	sliderValue = sliderElement.value();
	//rectangle
	fill(162, 217, 39);
	rect(10,100,sliderValue,150);

}