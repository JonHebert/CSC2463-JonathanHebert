let bugs = [];
let deadBugs = [];
let score = 0;
let timer = 30;

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 10; i++) {
    bugs.push(new Bug());
  }
}
function preload() {
  alive = loadImage("assets/alive.jpg");
  dead = loadImage("assets/dead.jpg");
}

function draw() {
  background(255);
  text("Score: " + score, 10, 20);
  text("Time: " + timer, 400, 20);
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].display();
    bugs[i].move();
  }
  for (let i = 0; i < deadBugs.length; i++) {
    deadBugs[i].display();
  }
  timer -= 0.05;
  if (timer <= 0) {
    noLoop();
    text("Game Over!", width / 2, height / 2);
  }
}

function mousePressed() {
  for (let i = bugs.length - 1; i >= 0; i--) {
    if (bugs[i].isClicked(mouseX, mouseY)) {
      score++;
      deadBugs.push(bugs[i]);
      bugs.splice(i, 1);
    }
  }
}

class Bug {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = 50;
    this.speed = 2;
    this.dead = false;
  }

  display() {
    if (!this.dead) {
      image(alive, this.x, this.y, this.size, this.size);
    } else {
      image(dead, this.x, this.y, this.size, this.size);
    }
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    this.speed += 0.05;
  }

  isClicked(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    if (d < this.size / 2) {
      this.dead = true;
      return true;
    }
    return false;
  }
}