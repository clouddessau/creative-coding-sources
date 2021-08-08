/***
 * Text Drawing
 * Jasmin Schmidt
 * 
 * © 2021 Jasmin Schmidt
 ***/

var x = 0;
var y = 0;
var stepSize = 5.0;

var font = 'Georgia';
var letters = 'We are all mad here. ';
var fontSizeMin = 3;
var angleDistortion = 0.0;

var counter = 0;

function setup() {
	let canvas = createCanvas(600, 600);

	background(255);
	cursor(CROSS);

	x = mouseX;
	y = mouseY;

	textFont(font);
	textAlign(LEFT);
	fill(0);
}

function draw() {
	if (mouseIsPressed && mouseButton == LEFT) {
		var d = dist(x, y, mouseX, mouseY);
		textSize(fontSizeMin + d / 2);
		var newLetter = letters.charAt(counter);
		stepSize = textWidth(newLetter);

		if (d > stepSize) {
			var angle = atan2(mouseY - y, mouseX - x);

			push();
			translate(x, y);
			rotate(angle + random(angleDistortion));
			text(newLetter, 0, 0);
			pop();

			counter++;
			if (counter >= letters.length) counter = 0;

			x = x + cos(angle) * stepSize;
			y = y + sin(angle) * stepSize;
		}
	}
}

function mousePressed() {
	x = mouseX;
	y = mouseY;
}

function keyReleased() {

	if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}

function keyPressed() {
	// angleDistortion ctrls arrowkeys up/down
	if (keyCode == UP_ARROW) angleDistortion += 0.1;
	if (keyCode == DOWN_ARROW) angleDistortion -= 0.1;

	if (key == 's') {
		saveCanvas('text-drawing', 'png')
	}
}
