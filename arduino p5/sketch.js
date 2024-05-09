let serial; // Serial port object
let sensorValue = 0; // Variable to store the sensor value

function setup() {
  createCanvas(400, 400);
  serial = new p5.SerialPort(); // Create a new serial port object
  serial.on('list', printList); // List available serial ports
  serial.on('data', serialEvent); // Callback function for serial data
  serial.open('COM3'); // Open the serial port (change 'COM3' to the appropriate port)
}

function draw() {
  background(map(sensorValue, 0, 1023, 0, 255)); // Change background color based on sensor value
}

function mousePressed() {
  if (mouseX < width / 2) {
    serial.write('1'); // Send command to turn LED on
  } else {
    serial.write('0'); // Send command to turn LED off
  }
}

function printList(portList) {
  for (let i = 0; i < portList.length; i++) {
    console.log(i + " " + portList[i]);
  }
}

function serialEvent() {
  sensorValue = Number(serial.readLine()); // Read sensor value from serial port
}
