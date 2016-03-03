/* GLOBAL VARIABLES */
var pic = document.getElementById("vimage");

var logoX = 10; // X pos of logo
var logoY = 10; // Y pos of logo
var c = document.createElementNS('http://www.w3.org/2000/svg', "dvd");
var dx = 1;
var dy = 1;

var init = function() {
  c.setAttribute("height","100");
  c.setAttribute("width","150");
  c.setAttribute("x", logoX.toString());
  c.setAttribute("y", logoY.toString());
  c.setAttribute("xlink:href", "logo_dvd.jpg");
};

var drawImage = function(x,y) {
  c.setAttribute("x", x.toString());
  c.setAttribute("y", y.toString());
  pic.appendChild(c);
};

var draw = function() {
    pic.removeChild(c);
    ctx.drawImage(logoX,logoY);

    if (logoX == 0 || logoX == 550-150) {
      dx = -dx;
    }
    else if (logoY == 0 || logoY == 550-100) {
      dy = -dy;
    }

    logoX = parseInt(c.getAttribute("x")) + dx;
    logoY = parseInt(c.getAttribute("y")) + dy;
};

var go = function() {
  init();
  intervalID = window.setInterval(draw, 16);
};

/*var btn = document.getElementById("stop");
btn.addEventListener("click", stop );

var stop = function() {
  window.cancelAnimationFrame( requestID );
  console.log("stop");
}*/
