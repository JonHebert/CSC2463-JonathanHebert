const int stompButtonPin = 2; // Pin connected to the stomp button
const int clapButtonPin = 4;  // Pin connected to the clap button
const int stompLedPin = 7;    // Pin connected to the stomp LED
const int clapLedPin = 8;     // Pin connected to the clap LED

void setup() {
  Serial.begin(9600); // Start serial communication
  pinMode(stompButtonPin, INPUT_PULLUP); // Set stomp button pin as input with internal pull-up resistor
  pinMode(clapButtonPin, INPUT_PULLUP);  // Set clap button pin as input with internal pull-up resistor
  pinMode(stompLedPin, OUTPUT); // Set stomp LED pin as output
  pinMode(clapLedPin, OUTPUT);  // Set clap LED pin as output
}

void loop() {
  // Read the state of the stomp button
  if (digitalRead(stompButtonPin) == LOW) {
    Serial.println('S'); // Send a character to indicate a stomp
    digitalWrite(stompLedPin, HIGH); // Turn on the stomp LED
    delay(1000); // Delay to debounce the button and prevent multiple signals
  } else {
    digitalWrite(stompLedPin, LOW); // Turn off the stomp LED
  }

  // Read the state of the clap button
  if (digitalRead(clapButtonPin) == LOW) {
    Serial.println('C'); // Send a character to indicate a clap
    digitalWrite(clapLedPin, HIGH); // Turn on the clap LED
    delay(1000); // Delay to debounce the button and prevent multiple signals
  } else {
    digitalWrite(clapLedPin, LOW); // Turn off the clap LED
  }

  delay(100); // Adjust this delay as needed to control the sampling rate
}
