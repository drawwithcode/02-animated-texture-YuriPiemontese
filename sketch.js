class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    stroke(0);
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, random(10, 30));
    colorMode(HSB);
    fill(color(random(0, 360), 100, 90));
  }

  run() {
    this.update();
    this.show();
  }
}

let walkers = [];
let walkersNum = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  console.log(walkers);
}

function draw() {
  background(color(0, 0, 5));

  for (let i = 0; i < walkersNum + 200; i++) {
    let newWalker = new Walker(width / 2, height / 2);
    walkers.push(newWalker);
  }

  for (let i = 0; i < frameCount + 200; i++) {
    walkers[i].run();
    // walkersNum = walkersNum++;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
