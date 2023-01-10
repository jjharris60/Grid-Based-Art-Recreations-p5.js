function setup() {
    createCanvas(windowWidth, windowHeight);
    let x = 0;
    let y = 0;
    let amplitude = windowHeight * 0.1;
    let frequency = windowWidth * 0.15;
    let maxAngle = (windowWidth / frequency) * TWO_PI;
    let theta = 0;
    while (theta < maxAngle) {
        y = sin(theta) * amplitude;
        ellipse(x, y + height * 0.5, 16);
        theta += 0.2;
        x = (theta / maxAngle) * windowWidth;
    }
}
function draw() {
}
