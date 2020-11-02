let wrenchElements = [circle01, box01, circle02, box02, circle03, box03]
let wrench =[]

let wrenchRotateElements = [circ01, rect01, circ02, rect02, circ03, rect03]
let wrenchRotate =[]

let scaleFactor = 2/3;
let urlParams;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  angleMode(DEGREES);
  for (let i = 0; i < wrenchElements.length; i++) {
    wrench[i] = new WrenchMove(wrenchElements[i]);
  }
  for (let i = 0; i < wrenchRotateElements.length; i++) {
    wrenchRotate[i] = new WrenchRotate(wrenchRotateElements[i]);
  }
}

function draw() {
  background(180);
  noStroke();

  fill(0);
  textAlign(CENTER, BASELINE)
  textSize(25);
  text('This is not a wrench.', width/2, height-60);

  push();
  translate(windowWidth/1000, height/5);
  scale(scaleFactor);
  drawWrench(0);
  pop();

  push();
  translate(windowWidth/3.2, height/5);
  scale(scaleFactor);
  drawWrench(175);
  for (let i = 0; i < wrenchElements.length; i++) {
    wrench[i].drawCircle();
    wrench[i].tracingObject();
    wrench[i].drawBox();
    wrench[i].tracingBoxObject();
    wrench[i].drawAngledBox();
    wrench[i].tracingAngledBox();
  }
  pop();

  push();
  translate(windowWidth/3*2, height/5);
  scale(scaleFactor);
  for (let i = 0; i < wrenchRotateElements.length; i++) {
    wrenchRotate[i].displayCircle();
    wrenchRotate[i].diagramCircle();
    wrenchRotate[i].displayRect();
    wrenchRotate[i].diagramRect();
  }
  pop();

  
  urlParams = new URLSearchParams(window.location.search);
  let count = 0;
  if (urlParams.has('frame')) {
    if (count === 1) {
    save(cnv, 'CuriousObjects.png');
    };
    count++;
  }
}

function drawWrench(wrenchColor) {
  noStroke();

  //bottom black circle
  fill(wrenchColor);
  ellipse(400, 600, 80, 80);

  //black handle rectangle
  fill(wrenchColor);
  rect(400, 450, 80, 300);

  //bottom white circle
  fill(180);
  ellipse(400, 600, 40, 40);

  //white thin handle part
  fill(180);
  rect(400, 470, 5, 270);

  //wrench head circle
  fill(wrenchColor);
  ellipse(400, 250, 150, 150);

  //angled wrench head
  fill(180);
  push();
  translate(380, 220);
  angleMode(DEGREES);
  rotate(151);
  rect(0, 0, 60, 110, 10);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



