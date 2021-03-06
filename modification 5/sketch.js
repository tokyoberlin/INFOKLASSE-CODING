let imageMaterial;

function preload() {
  imageMaterial = loadImage("img/leo3 copy.jpg");
}

function setup() {
  createCanvas(800, 500);
  
}

  noStroke();

function draw() {
  background(210, 187, 231);


  imageMaterial.loadPixels();

  for (let y = 0; y < imageMaterial.height; y++) {
    for (let x = 0; x < imageMaterial.width; x++) {
      const first_color_value = imageMaterial.get(x, y);
      const second_color_value = imageMaterial.get(x, y + 1);
      let out_color;

      if (lightness(first_color_value) > lightness(second_color_value)) {
        out_color = color(255, 0, 251 );

      }

      if (brightness(first_color_value) > brightness(second_color_value)) {
        out_color = color(255, 0, 0  );

      }

       if (brightness(first_color_value) < lightness(second_color_value)) {
          out_color = color(0, 99, 255 );
  
        
        
    }
    imageMaterial.set(x, y, out_color);

  }
}

  imageMaterial.updatePixels();

  image(imageMaterial, 0, 0, width, height);

  noLoop();
}
