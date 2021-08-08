/***
 * Pong
 * Jasmin Schmidt
 * 
 * © 2021 Jasmin Schmidt
 ***/


var paddleA, paddleB, ball, wallTop, wallBottom;
var MAX_SPEED = 10;
var scoreA = 0;
var scoreB = 0;

function preload() {
	ballImage = loadImage('assets/ball.png')
	paddleAImage = loadImage('assets/Schlaeger1.png')
	paddleBImage = loadImage('assets/Schlaeger2.png')
}

function setup() {
	let canvas = createCanvas(1200, 600);

	colorMode(HSL)

	paddleA = createSprite(30, height / 2, 10, 100);
	paddleA.immovable = true;
	paddleA.scale = 2;

	paddleB = createSprite(width - 28, height / 2, 10, 100);
	paddleB.immovable = true;
	paddleB.scale = 2;

	wallTop = createSprite(width / 2, -30 / 2, width, 30);
	wallTop.immovable = true;

	wallBottom = createSprite(width / 2, height + 30 / 2, width, 30);
	wallBottom.immovable = true;

	ball = createSprite(width / 2, height / 2, 10, 10);
	ball.maxSpeed = MAX_SPEED;

	paddleA.shapeColor = paddleB.shapeColor = ball.shapeColor = color(255, 255, 255);

	ball.setSpeed(MAX_SPEED, -180);

	ball.setCollider('circle', 0, 0, 10, 10)

	ball.addImage(ballImage);
	paddleA.addImage(paddleAImage)
	paddleB.addImage(paddleBImage)
}

function draw() {
	background(120, 100, 20);

	strokeWeight(20);
	stroke(100)
	line(width / 2, 0, width / 2, height);
	paddleA.position.y = constrain(mouseY, paddleA.height / 2, height - paddleA.height / 2);
	paddleB.position.y = constrain(mouseY, paddleA.height / 2, height - paddleA.height / 2);

	strokeWeight(2)
	line(3, 3, width - 3, 3)
	line(width - 3, 3, width - 3, height - 3);
	line(width - 3, height - 3, 3, height - 3);
	line(3, height - 3, 3, 3);

	strokeWeight(5);
	line(0, height / 2, width, height / 2);


	ball.bounce(wallTop);
	ball.bounce(wallBottom);

	var swing;
	if (ball.bounce(paddleA)) {
		swing = (ball.position.y - paddleA.position.y) / 3;
		ball.setSpeed(MAX_SPEED, ball.getDirection() + swing);
	}

	if (ball.bounce(paddleB)) {
		swing = (ball.position.y - paddleB.position.y) / 3;
		ball.setSpeed(MAX_SPEED, ball.getDirection() - swing);
	}

	if (ball.position.x < 0) {
		ball.position.x = width / 2;
		ball.position.y = height / 2;
		ball.setSpeed(MAX_SPEED, 0);
		MAX_SPEED = MAX_SPEED + 1
		scoreB++;
	}

	if (ball.position.x > width) {
		ball.position.x = width / 2;
		ball.position.y = height / 2;
		ball.setSpeed(MAX_SPEED, 180);
		MAX_SPEED = MAX_SPEED + 1
		scoreA++;
	}

	drawSprites();

	drawScore();
}

function drawScore() {
	textSize(30)

	text(scoreA, 30, 30);

	textAlign(RIGHT);
	text(scoreB, width - 30, 30);
}

function keyPressed() {
	if (key == 's') {
		saveCanvas('pong', 'png')
	}
}
