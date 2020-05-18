function setup() {
 createCanvas(windowWidth, windowHeight);
  background(0);
}

let ball = {
  x: 200,
  y: 300,
  xspeed: 5,
  yspeed: -4
};


function draw() {
  // display
  display()
  // move
  move()
  // bounce
  bounce()
}

function display() {
  fill(random(0, 300));
  ellipse(ball.x, ball.y, 100, 100);
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
