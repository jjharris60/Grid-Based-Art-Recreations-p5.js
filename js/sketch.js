let x = 0;
let y = 0;
let amplitude;
let maxAngle;
let frequency;
let inc = 0.05;
let offset = 0; // the amount offset from the beginnnijg of the sine wave
let theta = 0;
function setup() {
    amplitude = windowHeight / 3;
    frequency = windowWidth / 3;
    maxAngle = (windowWidth / frequency) * TWO_PI
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    noStroke();
    while (theta < maxAngle + offset) {
        // sine wave 2
        y = sin(theta - 0.2) * amplitude;
        fill(60, 5, 90);
        ellipse(x, y + height * 0.5, 16);
        // sine wave
        y = sin(theta) * amplitude;
        fill(30, 5, 90);
        ellipse(x, y + height * 0.5, 16);
        // cosine wave
        y = cos(theta) * amplitude;
        fill(80, 10, 90)
        ellipse(x, y + height * 0.5, 16);
        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
