var pic = document.getElementById("vimage");

var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var radius = 100;
var dr = -1;

var intervalID;

var init = function() {
  c.setAttribute("cx", 250);
  c.setAttribute("cy", 250);
  c.setAttribute("r", radius.toString());
  c.setAttribute("fill", "yellow");
  c.setAttribute("stroke", "black");
  pic.appendChild(c);
  console.log("test");
};

var scale = function() {
  pic.removeChild(c);
  radius = parseInt(c.getAttribute("r")) + dr;

  if (radius == 0) { dr = 1; }
  if (radius == 250) { dr = -1; }

  c.setAttribute("r", radius.toString());
  pic.appendChild(c);
};

var go = function() {
  init();
  intervalID = window.setInterval(scale, 16);
};
