/***
 * Paint
 * Jasmin Schmidt
 * 
 * © 2021 Jasmin Schmidt
 ***/

let circleSize = 30;

var prevMouseX, prevMouseY;

function setup() {
	let canvas = createCanvas(600, 600)

	colorMode(HSL)
	background(100)
	cursor(CROSS)

	textSize(15)
	text('Taste b = Farbe Blau', 20, 20);
	text('Taste r = Farbe Rot', 20, 40);
	text('Taste y = Farbe Gelb', 20, 60);
	text('Taste o = Farbe Orange', 20, 80)
	text('Taste g = Farbe Grün', 20, 100);
	text('Taste t = Farbe Türkis', 20, 120);
	text('Taste v = Farbe Lila', 20, 140);
	text('Taste p = Farbe Pink', 20, 160);
	text('Taste n = Farbe Schwarz', 20, 180)
	text('Taste e = Radiergummi', 20, 200);
	text('Taste d = alles zurücksetzen', 20, 220);
	text('Taste 1-9 = Pinselstärken', 20, 240)
}

function keyPressed() {
	if (key == 'd') {
		background(255);
	}

	if (key == 'n') {
		circleSize = 7;
		fill(0, 100, 0);
	}

	if (key == '1') {
		circleSize = 10;
	}
	if (key == '2') {
		circleSize = 20;
	}
	if (key == '3') {
		circleSize = 30;
	}
	if (key == '4') {
		circleSize = 40;
	}
	if (key == '5') {
		circleSize = 50;
	}
	if (key == '6') {
		circleSize = 60;
	}
	if (key == '7') {
		circleSize = 70;
	}
	if (key == '8') {
		circleSize = 80;
	}
	if (key == '9') {
		circleSize = 90;
	}

	if (key == 'r') {
		fill(0, 100, 50)
	}
	if (key == 'g') {
		fill(120, 100, 50)
	}
	if (key == 'b') {
		fill(240, 100, 50)
	}
	if (key == 'y') {
		fill(60, 100, 50)
	}
	if (key == 'p') {
		fill(310, 100, 50)
	}
	if (key == 'v') {
		fill(280, 100, 50)
	}
	if (key == 't') {
		fill(180, 100, 50)
	}
	if (key == 'o') {
		fill(30, 100, 50)
	}
	if (key == 'e') {
		fill(0, 0, 100)
	}

	if (key == 's') {
		saveCanvas('paint', 'png')
	}
}

function draw() {
	strokeWeight(5)
	ellipse(40, height - 40, 50, 50)

	if (key == 'r') {
		fill(0, 100, 50)
	}
	if (key == 'g') {
		fill(120, 100, 50)
	}
	if (key == 'b') {
		fill(240, 100, 50)
	}
	if (key == 'y') {
		fill(60, 100, 50)
	}
	if (key == 'p') {
		fill(310, 100, 50)
	}
	if (key == 'v') {
		fill(280, 100, 50)
	}
	if (key == 't') {
		fill(180, 100, 50)
	}
	if (key == 'o') {
		fill(30, 100, 50)
	}
	if (key == 'e') {
		fill(0, 0, 100)
	}
	if (key == 'n') {
		circleSize = 7;
		fill(0, 100, 0);
	}

	if (mouseIsPressed) {
		noStroke();
		ellipse(mouseX, mouseY, circleSize, circleSize);
	}
	else {
		noStroke();
		ellipse(mouseX, mouseY, 0, 0);

	}
}
