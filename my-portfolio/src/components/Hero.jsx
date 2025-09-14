import React from "react";

const Hero = () => {
  return (
    <>
    {/* Name Section */}
      <div className="flex items-center justify-center h-[80vh]">
        <div
          className="text-[12rem] tracking-wider leading-relaxed sm:text-[8rem] md:text-[17rem] font-extrabold text-center text-white"
          style={{
            fontFamily: "'Cyberfont', sans-serif",
            color: "#00ffe5",
            textShadow: "0 0 8px rgba(0,255,229,0.7), 0 0 10px rgba(0,255,229,0.5)",
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
