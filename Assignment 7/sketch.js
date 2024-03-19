// Initialize Tone.js
Tone.start();

// Create an oscillator for the bouncing sound
const bounceSynth = new Tone.MembraneSynth().toDestination();

// Function to trigger the bouncing sound effect
function playBounceSound() {
    // Set up modulation using an LFO to create variation in pitch
    const lfo = new Tone.LFO(10, -50, 50).start().connect(bounceSynth.frequency);

    // Play the bouncing sound with a short envelope
    bounceSynth.triggerAttackRelease("C3", "16n");
}

// Event listener for canvas click to trigger the sound effect
document.getElementById("canvas").addEventListener("click", playBounceSound);

// Function to draw the trampoline image on the canvas
function drawTrampoline() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const trampolineImg = new Image();
    trampolineImg.src = "assets/trampoline.png"; 
    trampolineImg.onload = function() {
        ctx.drawImage(trampolineImg, 100, 100); 
    }
}

// Call the function to draw the trampoline image initially (optional)
drawTrampoline();
