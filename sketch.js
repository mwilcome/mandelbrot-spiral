// Canvas and rendering parameters
let width = 800;
let height = 800;
let maxIter = 100; // Maximum iterations for Mandelbrot computation

// Initial view parameters
let initialScale = 1.5; // Half-width of the initial view

// Spiral animation parameters
let c0Re = -0.75; // Target point (real part), near the "seahorse valley"
let c0Im = 0.1;   // Target point (imaginary part)
let r0 = 0.75;    // Initial radius of spiral
let k = 0.02;     // Increased zoom speed
let omega = 0.15; // Slightly increased angular speed
let speed = 0.01; // Animation speed

function setup() {
  createCanvas(width, height);
  colorMode(HSB, 360, 100, 100); // HSB for smooth color gradients
  noStroke();
}

function draw() {
  // Calculate time parameter for animation
  let t = frameCount * speed;
  let expTerm = exp(-k * t);
  
  // Compute the spiraling center
  let centerRe = c0Re + r0 * expTerm * cos(omega * t);
  let centerIm = c0Im + r0 * expTerm * sin(omega * t);
  let scale = initialScale * expTerm;
  
  // Define the current view boundaries
  let realMin = centerRe - scale;
  let realMax = centerRe + scale;
  let imagMin = centerIm - scale;
  let imagMax = centerIm + scale;
  
  // Render the Mandelbrot set
  loadPixels();
  for (let py = 0; py < height; py++) {
    for (let px = 0; px < width; px++) {
      // Map pixel to complex plane
      let a = map(px, 0, width, realMin, realMax);
      let b = map(py, 0, height, imagMin, imagMax);
      
      // Mandelbrot iteration
      let zRe = 0;
      let zIm = 0;
      let iter = 0;
      while (iter < maxIter) {
        let zReNew = zRe * zRe - zIm * zIm + a;
        let zImNew = 2 * zRe * zIm + b;
        zRe = zReNew;
        zIm = zImNew;
        if (zRe * zRe + zIm * zIm > 4) break; // Escape condition
        iter++;
      }
      
      // Color the pixel
      let col;
      if (iter === maxIter) {
        col = color(0); // Black for points in the set
      } else {
        let hue = map(iter, 0, maxIter, 0, 360); // Gradient for escaping points
        col = color(hue, 100, 100);
      }
      set(px, py, col);
    }
  }
  updatePixels();
}

function keyPressed() {
    if (key == 's') {
      saveGif('myAnimation', 5); // Saves 5 seconds of animation, in case you want to capture it yourself~
    }
  }