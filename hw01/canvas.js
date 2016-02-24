//var c is ref to the element id "ftb2maga" in index.html
var c = document.getElementById("ftb2maga");
//create an object ctx so can write methods for drawing on the canvas
var ctx = c.getContext("2d");

/** DRAWS RED RECT **/
//indication of new drawing
ctx.beginPath();
//color of line to be drawn
ctx.strokeStyle = "red";
//size of line of line to be drawn
ctx.lineWidth="10";
//create a rectangle starting at 0,0 of canvas w/ width 100, hgt 100
ctx.rect(0,0,538,538);
//draws what was made in past cmds since beginPath
ctx.stroke();

/** DRAWS BLUE OUTLINED/RED FILLED TRIANGLE OVER RECT MADE ^^^ **/
//indication of new drawing
ctx.beginPath();
//color of line of line to be drawn
ctx.strokeStyle = "blue";
//size of line of next line to be drawn
ctx.lineWidth="50";
//start line at coordinate 0,0 (top left of canvas)
ctx.moveTo(0,0);
//draw line diagonally to coordinate 538,538 (bottom right of canvas)
ctx.lineTo(538,538);
//draw line up to coordinate 538,0 (top right of canvas)
ctx.lineTo(538,0);
//set shape fill to a specified color
ctx.fillStyle = "red";
//fills shape made by lineTo() w specified color from fillStyle
ctx.fill();
//closes shape made from past lineTo() cmds
ctx.closePath();
//draws what was made in past cmds since last beginPath
ctx.stroke();

/** DRAWS BLUE FILLED CIRCLE **/
//indication of new drawing
ctx.beginPath();
//
ctx.strokeStyle = "blue";
//create arc (full circle) at center 269,269 w/ radius 50
ctx.arc(269,269,70,0,2*Math.PI);
//set shape fill to a specified color
ctx.fillStyle = "blue";
//fills arc
ctx.fill();
//draw what was made in past cmds since last beginPath
ctx.stroke();

/** ERR: not appearing... **/
//set font to 50px arial
ctx.font = "50px arial";
//draw text
ctx.fillText("POKEBALL", 50,0);
