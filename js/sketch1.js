let x;
let y;
let direction;
let a;
let b;

function setup() {
    createCanvas(windowWidth, windowHeight);
    y = 0;
    x = width
    direction = true
    frameRate(60)
}

function draw() {
    x++;
    if (x > width) {
        x = 0;
        direction = !direction;
    }
    if (direction === true) {
        stroke(a);
    } else {
        stroke(width - x);
    }
    line(x, 0, x, height / 2);
    stroke(30)
    y--;
    if (y < 0) {
        y = width;
    }
    if (direction == true) {
        stroke(width - y)
    } else {
        stroke(y);
    }
    line(y, height / 2 + 1, y, height);
}