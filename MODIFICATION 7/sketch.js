
let imageMaterial;

function preload() {
  imageMaterial = loadImage("img/kiki2 copy.jpg");
}

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(220, 220, 220);
  imageMaterial.resize(900, 800);
  fill(180, 180, 180  );

  imageMaterial.loadPixels();

  console.log(imageMaterial.width)

  for (let y = 0; y < imageMaterial.height; y++) {
    for (let x = 0; x < imageMaterial.width; x++) {
      const in_color = imageMaterial.get(x, y);
      const dot_size = (brightness(in_color) / 500) 
           square(
        x * 800 / imageMaterial.width + 10 / imageMaterial.width * 10,
        y * 500 / imageMaterial.width + 50 / imageMaterial.width * 0.1,
        dot_size, 1,
        dot_size, 9,
        
      );
    }
  }

  // bild wird nur als input verwendet, aber nicht dargestellt

  noLoop();
}
