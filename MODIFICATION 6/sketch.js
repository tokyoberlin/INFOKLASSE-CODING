
let imageMaterial;

function preload() {
  imageMaterial = loadImage("img/kiki2 copy.jpg");
}

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(250, 0, 255);
  imageMaterial.resize(800, 900);
  fill(209, 209, 209  );
  noStroke();
  imageMaterial.loadPixels();

  console.log(imageMaterial.width)

  for (let y = 0; y < imageMaterial.height; y++) {
    for (let x = 0; x < imageMaterial.width; x++) {
      const in_color = imageMaterial.get(x, y);
      const dot_size = (lightness(in_color) / 255) * 2.5;
           rect(
        x * 800 / imageMaterial.width + 100 / imageMaterial.width *10,
        y * 500 / imageMaterial.width + 500 / imageMaterial.width * 0.1,
        dot_size, 1,
        dot_size, 9,
        
      );
    }
  }

  // bild wird nur als input verwendet, aber nicht dargestellt

  noLoop();
}
