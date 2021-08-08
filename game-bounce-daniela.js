/***
 * Bouncing Game
 * Daniela Heinz
 * 
 * © 2021 Daniela Heinz
 ***/

var box, circle;
var circleImage;

function preload() {
	circleImage = loadImage("assets/Kirby.png");
}

function setup() {
	let canvas = createCanvas(600, 600);

	box = createSprite(0, 0, 100, 200);
	circle = createSprite(300, 300);
	circle.addImage(circleImage);

	circle.setCollider("circle", 0, 0, 60, 60);
}

function draw() {
	background(255);

	//box.position.x = mouseX
	//box.position.y = mouseY

	box.velocity.x = (mouseX - box.position.x);
	box.velocity.y = (mouseY - box.position.y);

	//box bounct Kirby weg
	circle.bounce(box);

	//Linker Rand
	if (circle.position.x < 0) {
		circle.position.x = 1;
		circle.velocity.x = circle.velocity.x * -1;
	}

	//Linker Rand
	if (circle.position.x > width) {
		circle.position.x = width - 1;
		circle.velocity.x = circle.velocity.x * -1;
	}

	//Oberer Rand
	if (circle.position.y < 0) {
		circle.position.y = 1;
		circle.velocity.y = circle.velocity.y * -1;
	}

	//Unterer Rand
	if (circle.position.y > height) {
		circle.position.y = height - 1;
		circle.velocity.y = circle.velocity.y * -1;
	}
	//}

	//box bounct Kirby weg, unterer Code verursacht abprallen an der Seite
	//circle.bounce(box);

	//circle.mass = 5;

	//circle.debug = true;

	//Linker Rand
	if (circle.position.x < 0) {
		circle.position.x = 1;
		//circle.velocity.x = circle.velocity.x * -1;
	}

	//Linker Rand
	if (circle.position.x > width) {
		circle.position.x = width - 1;
		//circle.velocity.x = circle.velocity.x * -1;
	}

	//Oberer Rand
	if (circle.position.y < 0) {
		circle.position.y = 1;
		//circle.velocity.y = circle.velocity.y * -1;
	}

	//Unterer Rand
	if (circle.position.y > height) {
		circle.position.y = height - 1;
		//circle.velocity.y = circle.velocity.y * -1;
	}

	drawSprites();
}

function keyPressed() {
	if (key == 's') {
		speichern();
		if (key == 'n') {
			setup();
		}
	}
}

function speichern() {
	saveCanvas('game-bounce', 'png')
}
