/***
 * Pattern
 * Daniela Heinz
 * 
 * © 2021 Daniela Heinz
 ***/

var spalten = 10;
var zeilen = 10;

function setup() {
	let canvas = createCanvas(600, 600);
	colorMode(HSL);
	angleMode(DEGREES);
}

function draw() {
	background(100);

	for (var j = 0; j < zeilen; j++) {
		for (var i = 0; i < spalten; i++) {
			push();

			translate(50, 50);

			var posX = width / spalten * i;
			var posY = height / zeilen * j;

			translate(posX, posY);

			var winkel = atan2(mouseY - 50 - posY, mouseX - 50 - posX) + 90;
			var distanz = dist(mouseX, mouseY, posX, posY);
			var kontur = map(distanz, 0, width, 16, 2);
			var laenge = map(distanz, 0, width, 20, 4);
			var deckkraft = map(distanz, 0, width, 100, 10);

			rotate(winkel);

			stroke(250, 100, 50, deckkraft);
			strokeWeight(kontur);
			line(-laenge, 0, laenge, 0);

			//andere Form(Rechteck)
			//rect(-laenge, -laenge, laenge * 2 , laenge * 2);

			pop();
		}
	}
}

function keyPressed() {
	if (key == 's') {
		speichern();
	}
}

function speichern() {
	saveCanvas('pattern', 'png')
}
