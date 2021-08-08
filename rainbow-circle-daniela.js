/***
 * Rainbow Circle
 * Daniela Heinz
 * 
 * © 2021 Daniela Heinz
 ***/

var farbton = 0;
var radius;

function setup() {
	let canvas = createCanvas(600, 600);

	colorMode(HSL);
	background(0);
}

function draw() {
	fill(farbton, 100, 50);

	farbton = farbton + 0.5;

	if (farbton == 360) {
		farbton = 0;
	}

	radius = map(mouseX, 0, width, 10, 200);

	if (mouseIsPressed) {
		noStroke();
		ellipse(mouseX, mouseY, radius);
	} else {
		//fill(20, 100, 50)

		//rect(mouseX, mouseY, 50)
	}

	if (keyCode == 65 && keyIsPressed) {
		rect(mouseX, mouseY, 50)
	}
}

function keyPressed() {
	if (key == 's') {
		speichern();
	}

	if (key == 'n') {
		setup();
	}
}

function speichern() {
	saveCanvas('circle', 'png')
}
