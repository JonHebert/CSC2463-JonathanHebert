let polySynth;
let filter;

function setup() {
  createCanvas(400, 200);
  
  // Setup PolySynth with Tone.js
  polySynth = new Tone.PolySynth().toDestination();

  // Setup low-pass filter
  filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 500, // Initial frequency
  }).toDestination();

  // Connect the PolySynth to the filter
  polySynth.connect(filter);
}

function draw() {
  background(220);

  // Display filter frequency
  text('Filter Frequency: ' + int(filter.frequency.value), 10, height - 10);
}

function keyPressed() {
  // Map keys 'A' to 'K' to an octave
  const noteMap = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'];
  const index = noteMap.indexOf(key.toUpperCase());

  if (index !== -1) {
    // Trigger a note when a key is pressed
    const note = index + 48; // MIDI note number for the pressed key
    polySynth.triggerAttack(note);
  }
}

function keyReleased() {
  // Release the note when the key is released
  polySynth.triggerRelease();
}

function mouseMoved() {
  // Control filter frequency with mouseY position
  const freq = map(mouseY, 0, height, 100, 5000);
  filter.frequency.value = freq;
}
