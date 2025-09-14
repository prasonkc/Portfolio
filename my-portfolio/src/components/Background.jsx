import React from "react";
import { useEffect, useRef } from "react";

const Background = () => {
  // Create a refrence to canvas
  const canvasRef = useRef(null);

  // Load the effect on page refresh once
  useEffect(() => {
    // Get the current canvas element
    const canvas = canvasRef.current;

    // Get 2d drawing context/pen to write to canvas
    const pen = canvas.getContext("2d");

    // Make the canvas full screen
    canvas.width = window.innerWidth; //Browser width
    canvas.height = window.innerHeight; //Browser Height

    // Preparing the binary letters
    const binary = "01";
    const fontSize = 16;
    const initialDensity = 2;
    const finalDensity = 0.2;

    // Determining the total colums for vertical stream
    const col = Math.floor(canvas.width / fontSize);
    // Storing vertical position of each column's letter\
    const drops = Array(col).fill(1);
    // Track when the animation resets
    const resetting = Array(col).fill(false)

    // Draw the animation on canvas
    function draw() {
      // Draw the background
      pen.fillStyle = "rgba(13,13,13,0.1)";
      pen.fillRect(0, 0, canvas.width, canvas.height);

      // Set the font
      pen.font = `${fontSize}px monospace`;
      pen.fillStyle = "#0ff";

      //Draw Each colums
      for (let i = 0; i < drops.length; i++) {
        // Set the density
        const density = resetting[i] ? finalDensity : initialDensity;

        if (Math.random() < density) {
          // Pick between 0 or 1
          const text = binary.charAt(Math.floor(Math.random() * binary.length));
          // write to canvas
          pen.fillText(text, i * fontSize, drops[i] * fontSize);

          // Move the drop down
          drops[i]++;
          // Reset when letters go off screen
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
            resetting[i] = true;
          }
        }
      }

      // Repeat the animation
      requestAnimationFrame(draw);
    }

    // Call the draw function at start, the animation automatically loops when letters go off screen
    draw();

    // Adjust the size of canvas on windows resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    // Return Canvas to draw animation pixel by pixel
    // Pass the HTML canvas element to canvasRef
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default Background;
