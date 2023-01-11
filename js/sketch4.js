function setup() {
    createCanvas(1000, 1000)
    background(255, 133, 87);
}

function draw() {
    stroke(226, 13, 116)
    strokeWeight(4.5)
    noFill()

    circle(width / 2, height / 2, 500)
    let angle = 0;
    let x = diameter / 2 * Math.cos(angle) + width / 2;
    let y = diameter / 2 * Math.sin(angle) + width / 2
    point(x, y)
}