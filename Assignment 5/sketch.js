let sampler, reverb, reverbSlider;

function preload() {
  sampler = new Tone.Players({
    boowomp: "assets/Boowomp.mp3",
    bruh: "assets/Bruh.mp3",
    grilled: "assets/Grilled.mp3",
    naw: "assets/Naw.mp3"
  }).toDestination();

  // Initialize the reverb effect
  reverb = new Tone.Reverb().toDestination();

  // Connect the sampler to the reverb effect
  sampler.connect(reverb);

  // Load the reverb
  reverb.generate();
}

function setup() {
  createCanvas(400, 400);

  // Create buttons for each sample
  createSampleButton('Boowomp', 'boowomp', 50, 150);
  createSampleButton('Bruh', 'bruh', 150, 150);
  createSampleButton('Grilled', 'grilled', 250, 150);
  createSampleButton('Naw', 'naw', 350, 150);

  // Create a slider to control the reverb wetness
  reverbSlider = createSlider(0, 1, 0.5, 0.01);
  reverbSlider.position(50, 300);
}

function draw() {
  

  // Update the reverb wetness based on the slider value
  updateReverb(reverbSlider.value());
}

function createSampleButton(label, sample, x, y) {
  let button = createButton(label);
  button.position(x, y);
  button.mousePressed(() => playSample(sample));
}
function playSample(sample) {
  Tone.start();
  sampler.player(sample).start();
}

function updateReverb(value) {
  // Set the reverb wet value based on the slider
  reverb.wet.value = value;
}
