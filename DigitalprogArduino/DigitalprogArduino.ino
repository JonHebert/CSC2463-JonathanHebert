const int vrxPin = A0;
const int vryPin = A1;
const int potPin = A2;
const int buttonPin = 7;

void setup() {
  pinMode(vrxPin, INPUT);
  pinMode(vryPin, INPUT);
  pinMode(potPin, INPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  // Read joystick values
  int joyX = analogRead(vrxPin);
  int joyY = analogRead(vryPin);
  // Read potentiometer value
  int potValue = analogRead(potPin);
  // Map potentiometer value to range 0-9 (number of colors)
  int colorIndex = map(potValue, 0, 1023, 0, 9);
  // Read button state
  int buttonState = digitalRead(buttonPin);

  // Send joystick and potentiometer values, and button state to Serial
  Serial.print(joyX);
  Serial.print(",");
  Serial.print(joyY);
  Serial.print(",");
  Serial.print(colorIndex);
  Serial.print(",");
  Serial.println(buttonState);

  // Delay to prevent serial buffer overflow
  delay(100);
}
