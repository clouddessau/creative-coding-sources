/***
 * Flower
 * Daniela Heinz
 * 
 * © 2021 Daniela Heinz
 ***/

function setup() {
	let canvas = createCanvas(600, 600);
	strokeCap(ROUND);
	colorMode(HSL);
}

function draw() {
	background(150, 100, 95);

	translate(width / 2, height / 2);

	var kreis = int(map(mouseY, 0, height, 2, 80));
	var radius = mouseX - width / 2
	var angle = TAU / kreis

	strokeWeight(mouseY / 15);

	push();
	for (var i = 0; i <= kreis; i++) {
		var x = cos(angle * i) * radius * 2;
		var y = sin(angle * i) * radius * 2;
		stroke(300, 100, 80);
		line(0, 0, x, y);
	}
	pop();

	var kreis2 = int(map(mouseY, 0, height, 10, 150));
	var radius2 = mouseX - width / 2
	var angle2 = TAU / kreis

	push();
	for (var i = 0; i <= kreis2; i++) {
		var x = cos(angle2 * i) * radius2;
		var y = sin(angle2 * i) * radius2;
		stroke(300, 100, 90);
		strokeWeight(12);
		line(0, 0, x, y);
	}
	pop();

	push();
	fill(60, 100, 80);
	stroke(60, 100, 80);
	ellipse(0, 0, 150);
	pop();
}

function keyPressed() {
	if (key == 's') {
		saveCanvas('flower', 'png')
	}
}
