// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
/* exported preload setup draw */

// draws some grass with density driven by a luminance map image

let testImage;

function preload() {
  testImage = loadImage("kiki2.jpg");
  noLoop();
}

function setup() {
  // create a place to draw
  createCanvas(800, 500);

  // load up the pixel[] array so we can read colors out of it later
  testImage.loadPixels();
}

function draw() {
  // clear the background
  background(0, 0, 0);

  // set drawing styles
  stroke(255, 0, 0);
  fill(200, 200, 200);
  stroke(0, 200, 100, 90);

  testImage.loadPixels();

  const start = performance.now();

  // loop over every x,y pixel coordinate in the image
  for (let x = 0; x < 850; x++) {
    for (let y = 0; y < 500; y++) {
      const pixelRed = getQuick(testImage, x, y)[0];

      // pick a random value and compare it pixelRed
      // for example:
      // if pixelRed is 0, we'll never draw
      // if pixelRed is 255, we'll always draw
      // if pixelRed is 127, we'll draw 50% of the time
      if (random(300) < pixelRed) {
        drawGrassBlade(x, y);
      }
    }
  }

  const end = performance.now();

  console.log(`took ${floor(end - start)} ms`);

  noLoop();
}

function drawGrassBlade(x, y) {
  const bladeHeight = min(
    random(1, 60),
    random(1, 60),
    random(1, 60),
    random(1, 60),
    random(1, 60),
    random(1, 60)
  );

  let bladeLean = random(-0.3, 0.3);
  bladeLean *= bladeHeight;

  line(x, y, x + bladeLean, y - bladeHeight);
}

// find the RGBA values of the pixel at x, y in the img.pixels array
function getQuick(img, x, y) {
  const i = (y * img.width + x) * 4;
  return [
    img.pixels[i],
    img.pixels[i + 1],
    img.pixels[i + 2],
    img.pixels[i + 3],
  ];
}
