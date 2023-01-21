function setup() {
    noStroke()
    createCanvas(1000, 1000);
    let CELL_SIZE = 190;
    let x = 0;
    let y = 0;
    let size = CELL_SIZE
    let currentWidth = size;
    let currentHeight = size;
    rowCount = 0
    colCount = 0
    while (y < width) {
        while (x < width) {
            fill(237, 221, 221)
            circle(x - 95, y - 95, CELL_SIZE)
            x += currentWidth;
            // rowCount++
        }
        y += currentHeight
        x = 0
        // colCount++
    }
}
function draw() {
}