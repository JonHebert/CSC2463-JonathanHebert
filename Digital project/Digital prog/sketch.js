let colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'magenta', 'brown', 'white', 'black'];
let selectedColorIndex = 0;
let palette_cell_size = 30;
let x = 0;
let y = 0;
let drawing = false;
var brushSynth;
var clearScreenSynth;
var bgSynth;
var colorChangeSynth;
let serial;

function setup() {
  createCanvas(500, 500);
  strokeWeight(10);
  background(200);

  serial = new p5.SerialPort();
  serial.open('COM3');
  serial.on('data', serialEvent);
  Tone.start();

  // Initialize Tone.js synthesizers for sound effects
  brushSynth = new Tone.Synth().toDestination();
  colorChangeSynth = new Tone.Synth().toDestination();
  clearScreenSynth = new Tone.Synth().toDestination();

  // Initialize background music synthesizer
  bgSynth = new Tone.MonoSynth({
      oscillator: {
          type: 'sine' // You can change the oscillator type as desired
      },
      envelope: {
          attack: 0.1,
          decay: 0.2,
          sustain: 0.5,
          release: 1
      }
  }).toDestination();

  // Start playing background music
  playBackgroundMusic();
}

// Play background music
function playBackgroundMusic() {
  const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
  let index = 0;

  // Play notes in a loop
  Tone.Transport.scheduleRepeat(time => {
      bgSynth.triggerAttackRelease(notes[index], '8n', time);
      index = (index + 1) % notes.length;
  }, '8n');

  // Start Tone.js Transport
  Tone.Transport.start();
}

function draw() {
  noStroke();
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(0, i * palette_cell_size, palette_cell_size, palette_cell_size);
  }
  stroke(colors[selectedColorIndex]);
  ellipse(x, y, 10, 10);
}

function serialEvent() {
  let rawData = serial.readStringUntil('\n');
  if (rawData) {
    let data = rawData.trim();
    if (data === "CLICK") {
      // Simulate mouse click
      mousePressed();
    } else {
      let values = data.split(',');
      if (values.length === 4) {
        // Update joystick position
        x = map(parseInt(values[0]), 0, width, 0, width);
        y = map(parseInt(values[1]), 0, height, 0, height);
        // Update selected color index based on potentiometer value
        selectedColorIndex = parseInt(values[2]);
      }
    }
  }
}


function mousePressed() {
    drawing = true;
    brushSynth.triggerAttackRelease('E4', '8n');
  }
  
  function mouseReleased() {
    drawing = false;
  }
  
  function mouseDragged() {
    if (drawing) {
      line(mouseX, mouseY, pmouseX, pmouseY);
      brushSynth.triggerAttackRelease('E4', '8n');
    }
  }

function keyPressed() {
    if (key === 'c' || key === 'C') {
        clear();
        clearScreenSynth.triggerAttackRelease('G4', '8n');
    }
}