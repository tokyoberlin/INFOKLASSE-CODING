let imageMaterial;

function preload() {
  imageMaterial = loadImage("img/leo1.jpg");
}

function setup() {
  createCanvas(900, 500);
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
      if (r < 3) {
        out_color = color(255, 255, 255);
      }

      if (r > 3 && r < 90) {
        out_color = color(255, 0, 0 );
      }

      if (r > 90) {
        out_color = color(0, 0, 0);
      }


      imageMaterial.set(x, y, out_color);
    }

  imageMaterial.updatePixels();
  noSmooth();
  image(imageMaterial, 0, 0, width, height);
  noLoop();
  }
}
