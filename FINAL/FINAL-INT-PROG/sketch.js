let stompSound;
let clapSound;
let freddieImage;
let handLit = false;
let legLit = false;

function preload() {
  stompSound = loadSound('stomp.mp3');
  clapSound = loadSound('clap.mp3');
  freddieImage = loadImage('freddie.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(freddieImage, width / 2, height / 2, width, height);

  fill(handLit ? color(255, 0, 0) : color(255));
  ellipse(width * 0.3, height * 0.8, 50, 50);

  fill(legLit ? color(255, 0, 0) : color(255));
  rectMode(CENTER);
  rect(width * 0.7, height * 0.8, 20, 100);
}

function playStomp() {
  if (stompSound.isPlaying()) {
    stompSound.stop();
  }
  stompSound.play();
  handLit = true;
}

function playClap() {
  if (clapSound.isPlaying()) {
    clapSound.stop();
  }
  clapSound.play();
  legLit = true;
}

document.getElementById('stompButton').addEventListener('click', playStomp);
document.getElementById('clapButton').addEventListener('click', playClap);
