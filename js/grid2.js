function setup() {
    const CELL_SIZE = 100;
    createCanvas(600, 800);
    stroke(255);
    strokeWeight(0)
    let x = 0;
    let y = 0;
    let size = CELL_SIZE;
    let currentWidth = size;
    let currentHeight = size;
    while (y < height) {
        while (x < width) {
            let r = random(255);
            let g = random(255);
            let b = random(255);
            let randomColor = color(r, g, b);
            fill(randomColor);
            rect(x, y, CELL_SIZE, CELL_SIZE);

            let numRectangles = int(random(3)); // generate a random number of rectangles between 1 and 3
            let rectWidth = random(20, (CELL_SIZE / numRectangles)); // calculate the width of each rectangle
            let rectHeight = CELL_SIZE / numRectangles; // calculate the height of each rectangle

            let rectX = x; // set the x-coordinate of the first rectangle
            let rectY = y; // set the y-coordinate of the first rectangle

            let i = 0; // initialize the counter variable for the inner loop
            while (i < numRectangles) { // loop through the number of rectangles
                let r = random(255);
                let g = random(255);
                let b = random(255);
                let randomColor = color(r, g, b);
                fill(randomColor); // set the fill color to the first color in the array
                rect(rectX, rectY, rectWidth, rectHeight); // draw a rectangle with the calculated width and height

                rectX += rectWidth; // increment the x-coordinate for the next rectangle
                i++; // increment the counter variable
            }
            x += currentWidth;
        }
        y += currentHeight;
        x = 0;
    }
}


function draw() {

}