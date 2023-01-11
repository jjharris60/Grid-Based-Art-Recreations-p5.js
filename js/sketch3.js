let radius1;
let angle;
let step
function setup() {
    createCanvas(windowWidth, windowHeight)
    background(255, 133, 87);
    noFill()
    noStroke()
    r = 250
    angle = 0
    step = TWO_PI / 20
}


function draw() {
    translate(windowWidth / 2, windowHeight / 2);
    // centre ellipse
    ellipse(0, 0, 500);
    stroke(226, 13, 116)
    strokeWeight(4.5)
    // initialising variables
    // converting coordinates
    let x = r * sin(angle);
    let y = r * cos(angle);
    angle = angle + step;
    ellipse(x, y, 200);
    stroke(226, 13, 116)
    ellipse(x, y, 700);
    stroke(226, 13, 116);
}
