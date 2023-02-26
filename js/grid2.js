// function setup() {
//     const CELL_SIZE = 100;
//     createCanvas(600, 800);
//     stroke(255);
//     // strokeWeight(5);
//     let x = 0
//     let y = 0
//     let size = CELL_SIZE;
//     let currentWidth = size;
//     let currentHeight = size;
//     let rowCount = 0;
//     let columnCount = 0;
//     let colours = ['#008BFF', '#17D800']

//     while (y < height) {
//         while (x < width) {
//             fill(colours[1]);
//             rect(x, y, CELL_SIZE, CELL_SIZE);

//             // generate a random number of rectangles within each square
//             const numRectangles = Math.floor(random(1, 5));

//             //drawing the rectangles within the squares

//             let i = 0
//             while (i < numRectangles) {
//                 const rectWidth = random(5, CELL_SIZE / 2);
//                 const rectHeight = random(5, CELL_SIZE / 2);

//                 const rectX = random(x, x + CELL_SIZE - rectWidth);
//                 const rectY = random(y, y + CELL_SIZE - rectHeight);

//                 // draw the rectangle
//                 fill(colours[0]);
//                 rect(rectX, rectY, rectWidth, rectHeight);

//                 i++;
//             }
//             x += currentWidth;
//         }
//         y += currentHeight;
//         x = 0;
//         // columnCount++
//     }
//     rectMode(CORNER)
// }

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

            let numRectangles = int(random(1, 3)); // generate a random number of rectangles between 1 and 4

            let rectWidth = random((CELL_SIZE / numRectangles * 1.5)); // calculate the width of each rectangle
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