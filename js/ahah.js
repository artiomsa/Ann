function setup() {
 createCanvas(windowWidth, windowHeight);
}

let ball1 = {
  x: 200,
  y: 200,
  xspeed: 5,
  yspeed: 5,
}


let ball2 = {
  x: 0,
  y: 0,
  xspeed: 3,
  yspeed: 3,
}

let ball3 = {
  x: 230,
  y: 235,
  xspeed: 5,
  yspeed: 1,
}

let ball4 = {
  x: 500,
  y: 4,
  xspeed: 2,
  yspeed: 1,
}

let ball5 = {
  x: 800,
  y: 20,
  xspeed: 2,
  yspeed: 2,
}

function draw() {
  noStroke();
  background('#FFD600');

  fill('#FFFFFF');
  let one = map(mouseX, 0, width, width, 0);
  ellipse(one, 80, 100);

  fill('#F84CAB');
  let three = map(mouseX, 0, width, 500, 0);
  ellipse(three, - 10, 200, 190);

  fill('#FFFFFF');
  let two = map(mouseX, 0, width, 0, width);
  ellipse(two + 0, 200, 50);

  fill('#F84CAB');
  let four = map(mouseX, 0, width, 0, width);
  ellipse(four + 100, 600, 90);

  fill('#FFFFFF');
  let five = map(mouseX, 0, width, 200, width);
  ellipse(five + 0, 50, 80);

  fill('#FFFFFF');
  let six = map(mouseX, 0, width, 150, width);
  rect(six, 400, 200, 50, 0);

  fill('#F84CAB');
  let seven = map(mouseX, 0, width, 300, width);
  ellipse(seven - 400, 150, 70);

  fill('#F84CAB');
  let eight = map(mouseX, -100, width, width, 0);
  ellipse(eight, 500, 300);

  fill('#FFFFFF');
  push();
  translate(width * 0.19, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 50, 5);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -80.0);
  polygon(0, 0, 40, 5);
  pop();

  push();
  translate(width * 0.3, height * 0.8);
  rotate(frameCount / 70.0);
  polygon(0, 0, 20, 5);
  pop();

  push();
  translate(width * 0.5, height * 0.2);
  rotate(frameCount / -100.0);
  polygon(0, 0, 30, 5);
  pop();

  push();
  translate(width * 0.9, height * 0.2);
  rotate(frameCount / 70.0);
  polygon(0, 0, 90, 5);
  pop();

  push();
  translate(width * 0.6, height * 0.8);
  rotate(frameCount / -60.0);
  polygon(0, 0, 55, 5);
  pop();

  // fill('#FFFFFF');
  // if (mouseIsPressed) {
  // let x = random(width);
  // let y = random(height);
  // ellipse(x,y,50,50);
  // }

  fill('#1AA8E5')
  rect(ball1.x, ball1.y, 25, 25)

  ball1.x = ball1.x + ball1.xspeed
  ball1.y = ball1.y - ball1.yspeed

  if (ball1.x > width || ball1.x < 0) {
  ball1.xspeed = ball1.xspeed * -1;
  }
  if (ball1.y > height || ball1.y < 0) {
  ball1.yspeed = ball1.yspeed * -1;
  }

  fill('#1AA8E5')
  ellipse(ball2.x, ball2.y, 40, 40)


  ball2.x = ball2.x + ball2.xspeed
  ball2.y = ball2.y - ball2.yspeed

  if (ball2.x > width || ball2.x < 0) {
  ball2.xspeed = ball2.xspeed * -1;
  }
  if (ball2.y > height || ball2.y < 0) {
  ball2.yspeed = ball2.yspeed * -1;
  }

  fill('#1AA8E5')
  ellipse(ball3.x, ball3.y, 50, 50)

  ball3.x = ball3.x + ball3.xspeed
  ball3.y = ball3.y - ball3.yspeed

  if (ball3.x > width || ball3.x < 0) {
  ball3.xspeed = ball3.xspeed * -1;
  }
  if (ball3.y > height || ball3.y < 0) {
  ball3.yspeed = ball3.yspeed * -1;
  }

  fill('#1AA8E5')
  rect(ball4.x, ball4.y, 50, 50)

  ball4.x = ball4.x + ball4.xspeed
  ball4.y = ball4.y - ball4.yspeed

  if (ball4.x > width || ball4.x < 0) {
  ball4.xspeed = ball4.xspeed * -1;
  }
  if (ball4.y > height || ball4.y < 0) {
  ball4.yspeed = ball4.yspeed * -1;
  }

  fill('#1AA8E5')
  rect(ball5.x, ball5.y, 35, 35)

  ball5.x = ball5.x + ball5.xspeed
  ball5.y = ball5.y - ball5.yspeed

  if (ball5.x > width || ball5.x < 0) {
  ball5.xspeed = ball5.xspeed * -1;
  }
  if (ball5.y > height || ball5.y < 0) {
  ball5.yspeed = ball5.yspeed * -1;
  }
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mousePressed() {
  ellipse(mouseX, mouseY, 190, 190);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
