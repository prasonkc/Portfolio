import React from "react";

const Hero = () => {
  return (
    <>
      {/* Name Section */}
      <div className="flex items-center justify-center">
        <div
          className="tracking-wider leading-relaxed text-[12vw] font-extrabold text-center text-white"
          style={{
            fontFamily: "'Cyberfont', sans-serif",
            color: "#00ffe5",
            textShadow: `
            2px 2px 0 #ff00ff,
            4px 4px 0 #0ff,
            6px 6px 0 rgba(0,0,0,0.5)
            `,
            animation: "flicker 2.5s infinite alternate",
          }}
        >
          PRASON KC
        </div>
      </div>
    </>
  );
};

export default Hero;
