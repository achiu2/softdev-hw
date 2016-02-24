var c = document.getElementById("playground");
var ctx = c.getContext("2d");
/** DRAWS RED RECT **/
//indication of new drawing
ctx.beginPath();
//color of line to be drawn
ctx.strokeStyle = "black";
//size of line of line to be drawn
ctx.lineWidth="5";
//create a rectangle starting at 0,0 of canvas w/ width 100, hgt 100
ctx.rect(0,0,538,538);
//draws what was made in past cmds since beginPath
ctx.stroke();
ctx.endPath();

/**DRAWING IN CANVAS**/
ctx.beginPath();
c.addEventListener('mousedown', drawLine);

function drawLine(function(e) {
  ctx.beginPath();

  var firstx = e.pageX;
  var firsty = e.pageY;

  ctx.moveTo(firstx,firsty);

  c.addEventListener('mousedown', nextPt);
});

function nextPt(function(f) {
    var nextX = f.pageX;
    var nextY = f.pageY;
    ctx.lineTo(nextX,nextY);
  });
  ctx.stroke();
  c.addEventListener('mousedown', nextPt);
}

document.getElementById("clear").addEventListener("click", clear());
function clear() {
  ctx.clearRect(0,0,538,538);
}
