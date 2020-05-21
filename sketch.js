//t, h, e, o(one), n(nine), s(seven), f(five)
let font, font2, thin, itc;
let fontSize = 70;
let c;
let alpha = 100;
var textAry = ['T', 'H', 'E', '1', '9', '7', '5'];

let tArray = [];
let hArray = [];
let eArray = [];
let oArray = [];
let nArray = [];
let sArray = [];
let fArray = [];
let NoacfArray = [];
let nOacfArray = [];
let noAcfArray = [];
let noaCfArray = [];
let noacFArray = [];

var Tvehicles = [];
var Hvehicles = [];
var Evehicles = [];
var Ovehicles = [];
var Nvehicles = [];
var Svehicles = [];
var Fvehicles = [];
var NNvehicles = [];
var OOvehicles = [];
var AAvehicles = [];
var CCvehicles = [];
var FFvehicles = [];

let theta = 0;

let x, y;
let cx, cy;
let dx, dy;
let bg;
let over = false;


function preload() {
  font = loadFont('HvBlEx.otf');
  font1 = loadFont('HvBkEx.otf');
  thin = loadFont('HvThEx.otf')
  bg = loadImage('1975.jpg');
  itc = loadFont('ITCAvantGarde.otf');
}

function setup() {
  createCanvas(500, 500);
  textFont(font);
  textSize(fontSize);
  smooth();
  pixelDensity(2);
  x = width / 2 - textWidth('THE1975') / 2;
  y = height / 2 + fontSize / 2 - 10;
  cx = width / 2;
  cy = height / 2;
  dx = 10;
  dy = 7;
  tArray = font.textToPoints('T', x, y, fontSize, {
    sampleFactor: 0.25
  });
  hArray = font.textToPoints('H', x + textWidth('T'), y, fontSize, {
    sampleFactor: 0.25
  });
  eArray = font.textToPoints('E', x + textWidth('TH'), y, fontSize, {
    sampleFactor: 0.25
  });
  oArray = font.textToPoints('1', x + textWidth('THE'), y, fontSize, {
    sampleFactor: 0.25
  });
  nArray = font.textToPoints('9', x + textWidth('THE1'), y, fontSize, {
    sampleFactor: 0.25
  });
  sArray = font.textToPoints('7', x + textWidth('THE19'), y, fontSize, {
    sampleFactor: 0.25
  });
  fArray = font.textToPoints('5', x + textWidth('THE197'), y, fontSize, {
    sampleFactor: 0.25
  });

  NoacfArray = font1.textToPoints('N', 413, 47, 22, {
    sampleFactor: 0.25
  });
  nOacfArray = font1.textToPoints('O', 449, 47, 22, {
    sampleFactor: 0.25
  });
  noAcfArray = font1.textToPoints('A', 432, 66, 22, {
    sampleFactor: 0.25
  });
  noaCfArray = font1.textToPoints('C', 413, 86, 22, {
    sampleFactor: 0.25
  });
  noacFArray = font1.textToPoints('F', 453, 86, 22, {
    sampleFactor: 0.25
  });

  textInit(tArray, Tvehicles, 10, 7, true);
  textInit(hArray, Hvehicles, 10, 7, true);
  textInit(eArray, Evehicles, 10, 7, true);
  textInit(oArray, Ovehicles, 10, 7, true);
  textInit(nArray, Nvehicles, 10, 7, true);
  textInit(sArray, Svehicles, 10, 7, true);
  textInit(fArray, Fvehicles, 10, 7, true);
  textInit(NoacfArray, NNvehicles, 5, 0.1, false);
  textInit(nOacfArray, OOvehicles, 5, 0.1, false);
  textInit(noAcfArray, AAvehicles, 5, 0.1, false);
  textInit(noaCfArray, CCvehicles, 5, 0.1, false);
  textInit(noacFArray, FFvehicles, 5, 0.1, false);
}

function draw() {
  push();
  noStroke();
  fill(239, 229, 212, alpha);
  rect(0, 0, width, height);

  // image(bg, 0, 0, width, height);
  pop();
  cx += dx;
  cy += dy;
  if (cx > width) {
    dx *= -1;
  }
  if (cy > height) {
    dy *= -1;
  }
  if (cx < 0) {
    dx *= -1;
  }
  if (cy < 0) {
    dy *= -1;
  }
  push();
  noFill();
  // fill(255);
  noStroke();
  ellipse(cx, cy, 20, 20);
  pop();

  typeScript(Tvehicles); // T
  typeScript(Hvehicles); // H
  typeScript(Evehicles); // E
  typeScript(Ovehicles); // 1
  typeScript(Nvehicles); // 9
  typeScript(Svehicles); // 7
  typeScript(Fvehicles); // 5

  typeScript(NNvehicles);
  typeScript(OOvehicles);
  typeScript(AAvehicles);
  typeScript(CCvehicles);
  typeScript(FFvehicles);
  textSize(7);
  textFont(itc);
  text('MUSICFORCARS', 173 - textWidth('Notes On A Conditional Form    '), 37);
  textSize(8);

  text('The 1975', 273 - textWidth('Notes On A Conditional Form    '), 37);
  textSize(8);

  text('Notes On A Conditional Form', 333 - textWidth('Notes On A Conditional Form    '), 37);
  textSize(8);

  text('DH00753', 348, 37);
  textSize(10);
  text('Notes On A Conditional Form', 193 - textWidth('Notes On A Conditional Form    '), height - 37);
  push();
  textSize(15);

  fill(0, map(sin(frameCount * 0.1), -1, 1, 50, 255));
  text('Frail State Of Mind', 328, height - 37);
  pop();
  theta += 10;
}

function textInit(XXXAray, XXvehicles, ms, mx, value) {
  var XXArray = XXXAray;
  for (let i = 0; i < XXArray.length; i++) {
    var Fpt = XXArray[i];

    var XXvehicle = new Vehicle(Fpt.x, Fpt.y, ms, mx, value);
    XXvehicles.push(XXvehicle);
  }
}

function typeScript(XXvehicles) {
  beginShape();
  for (let i = 0; i < XXvehicles.length; i++) {
    var XXv = XXvehicles[i];
    XXv.behaviors(cx, cy);
    XXv.update();
    XXv.show();
  }
  endShape(CLOSE);
}


function Vehicle(x, y, ms, mx, value) {
  if (value == true) {
    this.pos = createVector(random(width), random(height));
  } else {
    this.pos = createVector(x, y);
  }
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8;
  this.maxSpeed = ms;
  this.maxForce = mx;
}
Vehicle.prototype.behaviors = function (rX, rY) {
  var arrive = this.arrive(this.target);
  var ball = createVector(rX, rY);
    var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(ball);

  // var flee = this.flee(mouse);

  // arrive.mult(1);
  // flee.mult(5);

  this.applyForce(arrive);
  this.applyForce(flee);
}

Vehicle.prototype.applyForce = function (f) {
  this.acc.add(f);
}
Vehicle.prototype.update = function () {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}
Vehicle.prototype.show = function () {
  // strokeWeight(8);
  fill(c);
  noStroke();
  vertex(this.pos.x, this.pos.y);
}


Vehicle.prototype.arrive = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxSpeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxSpeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxForce);
  return steer;
}
Vehicle.prototype.flee = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 50) {
    over = true;
    c = color(0, 0, 0);
    alpha = 10;
    desired.setMag(this.maxSpeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  } else {
    createVector(0, 0);
    c = color(0, 0, 0);
    alpha = 50;
  }
}