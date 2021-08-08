/***
 * Pride
 * Daniela Heinz
 * 
 * © 2021 Daniela Heinz
 ***/

var speicher = [];
var radius;
var farbtonB = 240;
var deltaFarbtonB = .5;
var farbtonL = 0;
var detaFarbtonL = .5;

function setup() {
	let canvas = createCanvas(600, 600);
	colorMode(HSL);
	background(0);

	fill(0, 50, 100);
	text('press b + click/drag mouse = bisexual flag colors', 20, 30,);
	text('press l + click/drag mouse = LGBTQ+ flag colors', 20, 50,);
	text('press n = create new canvas', 20, 70,);
}

function draw() {
	translate(mouseX, mouseY);

	farbtonB = farbtonB + deltaFarbtonB;

	push();
	if (farbtonB == 240 || farbtonB == 300) {
		deltaFarbtonB = -deltaFarbtonB;
	}

	if (key == 'b' && mouseIsPressed) {
		stroke(farbtonB, 100, 50, 0.7);
		strokeWeight(0.3);

		noFill();
		beginShape();
		curveVertex(0, 0);
		curveVertex(40, 30);
		curveVertex(80, 50);
		curveVertex(50, 80);
		curveVertex(150, 100);
		curveVertex(40, 150);
		curveVertex(-50, 200);
		curveVertex(-130, 150);
		curveVertex(-100, 100);
		curveVertex(-150, 30);
		curveVertex(0, 0);
		curveVertex(40, 30);
		curveVertex(80, 50);
		endShape();
	}
	pop();

	farbtonL = farbtonL + 0.5;

	push();
	if (farbtonL == 360) {
		farbtonL = 0;
	}

	translate(-500, -400);

	if (key == 'l' && mouseIsPressed) {
		noFill();
		stroke(farbtonL, 100, 50, 0.4);
		beginShape();
		curveVertex(500, 400);
		curveVertex(370, 320);
		curveVertex(350, 500);
		curveVertex(250, 600);
		curveVertex(150, 500);
		curveVertex(100, 450);
		curveVertex(150, 380);
		curveVertex(500, 400);
		curveVertex(370, 320);
		curveVertex(350, 500);
		endShape();
	}
	pop();
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
	saveCanvas('pride', 'png')
}
