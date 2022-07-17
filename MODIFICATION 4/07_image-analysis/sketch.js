let imageMaterial;

function preload() {
  imageMaterial = loadImage("img/kiki2.jpg");
}

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(255, 255, 0);

  
  imageMaterial.loadPixels();

  for (let y = 0; y < imageMaterial.height; y++) {
    for (let x = 0; x < imageMaterial.width; x++) {

      const in_color = imageMaterial.get(x, y);
      console.log (in_color) 

      const r = red(in_color); 
      const g = green(in_color);
      const b = blue(in_color);

      let out_color;
      if (r < 200) {
        out_color = color(in_color, in_color, in_color);
      }

      if (g > 30 && r < 90) {
        out_color = color(0, 93, 255);
      }

      if (r > 90) {
        out_color = color(r, g, b);
      }


      imageMaterial.set(x, y, out_color);
    }

  imageMaterial.updatePixels();
  noSmooth();
  image(imageMaterial, 0, 0, width, height);
  noLoop();
  }
}
