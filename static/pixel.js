// pixel js
// written by @epiqmax

var paints = {};
function logPaint(ev) {
	paints.push(ev);
}

var pallete = document.getElementById("pallete");
var pal = "";
var plvl = 0;
for (var i=0; i<20; i++) {
	plvl++;
	pal = pal + "<span class=\"pixl pixl"+i+"\"></span>";
	if (lvl == 9) {
		pal = pal + "<span class=\"pixldrop\"></span>";
		plvl = 0;
	}
}

var pix = document.getElementById("pix");
var matrix = "";
var lvl = 0;
for (var i=0; i<=720; i++) {
	lvl++;
	matrix = matrix + "<span class=\"pixl pixl"+i+"\"></span>";
	if (lvl == 30) {
		matrix = matrix + "<span class=\"pixldrop\"></span>";
		lvl = 0;
	}
}
pix.innerHTML = matrix;
pallete.innerHTML = pal;