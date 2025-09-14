import React from "react";

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

    // Determining the total colums for vertical stream
    const col = Math.floor(canvas.width / fontSize);
    // Storing vertical position of each column's letter\
    const drops = Array(col).fill(i);

    // Draw the animation on canvas
    function draw() {
      // Draw the background
      pen.fillStyle = "rgba(13,13,13,0.1)";
      pen.fillRect(0, 0, canvas.width, canvas.height);

      // Set the font
      pen.font = `${fontSize}px monospace`;
      ctx.fillStyle = "#0ff";

      

      // Move the drop down
      drops[i]++;

      // Reset when letters go off screen
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
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
