function setup() {
    const CELL_SIZE = 40;
    createCanvas(1000, 1000);
    let x = 0;
    let y = 0;
    let size = CELL_SIZE
    let currentWidth = size;
    let currentHeight = size;
    rowCount = 0
    colCount = 0

    while (y < width) {
        while (x > width) {
            fill(237, 221, 221)
            circle(x, y, CELL_SIZE)
        }
    }
}

function draw() {

}
