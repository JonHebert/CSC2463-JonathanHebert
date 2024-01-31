function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  fill('yellow');
  arc(100, 200, 150, 150, 450, PI-QUARTER_PI, PIE);
  fill('red');
  square(225,125,150,100,100,0,0);
  fill('white');
  circle(270,190,40);
  fill('white');
  circle(330,190,40);
  fill('blue');
  circle(270,190,20);
  fill('blue');
  circle(330,190,20);
}
