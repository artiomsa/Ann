function setup() {
 createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
  circle (mouseX, mouseY, 100);
  }
  fill(250, 128, 114)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
