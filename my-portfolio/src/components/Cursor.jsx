import React from "react";
import { useState, useEffect } from "react";

const Cursor = () => {
    // const [pos, setPos] = useState({x:0, y:0})
    
    // Moving the cursor with mouse
    useEffect(() => {
      const cursor = document.getElementById("neon-cursor");

    //   Get the position of mouse
      const moveCursor = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`; 
      }

    //   Move the cursor
     window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
    }, [])
    

  return (
    <div
      id="neon-cursor"
      className="w-4 h-4 bg-pink-500 rounded-full fixed pointer-events-none z-50
                 shadow-[0_0_10px_#ff00ff,0_0_20px_#ff00ff,0_0_40px_#ff00ff,0_0_80px_rgba(255,0,255,0.4)]
                 transition-transform duration-50"
      style={{
        animation: "pulseGlow 2s infinite ease-in-out",
      }}
    />
  );
};

export default Cursor;
