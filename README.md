# Mandelbrot Spiral Visualization

This project is a dynamic visualization of the Mandelbrot set, implemented using p5.js. It features a continuous zoom effect that spirals into a specific region of the fractal, demonstrating intricate boundary patterns. Developed as a personal exploration of mathematical visualization and creative coding, this work highlights my ability to combine technical proficiency with visual design.

## Overview

The Mandelbrot set is defined by iterating the function \( z_{n+1} = z_n^2 + c \) for complex numbers \( c \), where points remain bounded if the magnitude of \( z \) stays below 2. This implementation maps each pixel to a complex plane coordinate, computes its escape time, and applies a color gradient to reveal the set’s structure. The animation spirals toward the point \(-0.75 + 0.1i\), a region rich with spiral formations, enhancing the visual impact.

### Screenshots
Below are some representations of the visualization:

![Mandelbrot Spiral Screenshot](mandelbrot-1.gif)

![Mandelbrot Zoom Screenshot](mandelbrot-2.gif)

## Technical Details

- **Language and Libraries:** JavaScript with p5.js for canvas rendering and animation.
- **Key Features:**
  - Real-time computation of the Mandelbrot set for an 800x800 pixel canvas.
  - Exponential zoom and spiral path calculated using parametric equations:  
    \( \text{center} = c_0 + r_0 e^{-kt} (\cos(\omega t) + i \sin(\omega t)) \).
  - HSB color mode for smooth gradients outside the set.
- **Performance Considerations:** Optimized pixel-by-pixel iteration with a maximum of 100 iterations per point.

## Setup and Execution

To run this project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/mwilcome/mandelbrot-spiral.git
   cd mandelbrot-spiral
   ```
2. Serve the files using a local server (e.g., `npx http-server`).
3. Open `http://localhost:8080` in a web browser to view the animation.

No additional dependencies are required beyond a modern browser, as p5.js is loaded via ## Purpose

This project serves as a demonstration of my skills in algorithm implementation, JavaScript programming, and visualization techniques. It reflects my interest in exploring complex systems and presenting them in an accessible, engaging format—qualities I bring to engineering challenges in professional settings.

## Author

Mike Wilcome  
Principal Engineer  
GitHub: [mwilcome](https://github.com/mwilcome)