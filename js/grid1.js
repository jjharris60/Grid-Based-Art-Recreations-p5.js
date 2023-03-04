function setup() {
    const CELL_SIZE = 90;
    createCanvas(1000, 1000);
    // noFill()
    stroke(255)
    strokeWeight(25)
    let x = 0;
    let y = 0;
    let size = CELL_SIZE
    let currentWidth = size;
    let currentHeight = size;
    let rowCount = 0;
    let columnCount = 0

    let colours = ['#008BFF', '#17D800']

    while (y < height) {
        while (x < width) {
            if ((rowCount % 2 == 0 && columnCount % 2 == 1) || (rowCount % 2 == 1 && columnCount % 2 == 0)) {
                fill(colours[1])
                rect(x, y, CELL_SIZE, CELL_SIZE)
            } else {
                fill(colours[0])
                rect(x, y, CELL_SIZE, CELL_SIZE)
            }
            x += currentWidth;
            rowCount++;
        }
        y += currentHeight;
        columnCount++;
        x = 0;
    }
}
function draw() {
}