/*
*  Name: 		Dennis Kimble
*  Filename: 	kimble_dennis_assignment05.js
*/
var $ = function(id) { return document.getElementById(id);};
// canvas globals
var startX = 0, endX = 0;
var startY = 0, endY = 0;
/*var canvas = $("drawing");
var ctx = canvas.getContext("2d");
// ctx.beginPath();
ctx.fillStyle = "red";
ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(0, 0, 0)";
ctx.strokeRect(135, 275, 125, 125);*/

var createClickBox = function(clickZone) {
	"use strict";
	// console.dir(clickZone);
	// store dimensions
	var boxWidth = 0;
	var boxHeight = 0;
	
	
	// create event handlers
	// This is the handler for the MouseDown movement
	var mousedown = function() {
		startX = event.x - offsetTopLeft.left; // X position - left border
		startY = event.y - offsetTopLeft.top;  // Y position - top border
		boxWidth = Math.abs(startX);
		boxHeight = Math.abs(startY);
	};
	
	// You can tell by the name but to state it explicitly
	// This is the handler for the release of the mouse
	var mouseup = function() {
		endX = event.x - offsetTopLeft.left;
		endY = event.y - offsetTopLeft.top;
		boxWidth += Math.abs(endX);
		boxHeight += Math.abs(endY);
		$("wid").value = boxWidth;
		$("hgt").value = boxHeight;
	};
	
	// attach event handlers
	clickZone.addEventListener("mousedown", mousedown);
	clickZone.addEventListener("mouseup", mouseup);
};


// Form validation for width and height
var validateDimensions = function() {
	"use strict";
	var outOfBound = false;
	if ( $("wid").value > 500 || 
	     $("wid").value < 0 ) { outOfBound = true; }	
	if ( $("hgt").value > 500 || 
	     $("hgt").value < 0 ) { outOfBound = true; }
	if (!outOfBound) { 
		calc(); 
	} else {$("error").innerHTML = "Values must be positive and not larger than the canvas";
	}
};
// clear errors and inputs
var clearForm = function() {
	"use strict";
	$("wid").value = "";
	$("hgt").value = "";
	$("error").innerHTML = "";
	ctx.clearRect(0, 0, canvas.width, canvas.height);
};

window.onload = function() {
	"use strict";
	var btnCalc = $("do_calc");
	createClickBox($("drawing"));
	btnCalc.addEventListener("click", validateDimensions);
	$("wid").addEventListener("click", clearForm);
	$("hgt").addEventListener("click", clearForm);
};