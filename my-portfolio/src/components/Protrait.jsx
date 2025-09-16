import React, { useState } from "react";

const Portrait = () => {
  const [hover, setHover] = useState(false);

  // Array of texts
  const texts = ["I'm shy!", "Please dont touch me", "NO!", "help!", "pls hire me 😭"];

  // Pick a random text
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  return (
    <div className="w-full sm:w-[90%] md:w-[60vw] mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-center sm:items-start px-4 mb-8">

      {/* Portrait frame */}
      <div
        className="cyberpunk-frame w-[80vw] sm:w-[320px] md:w-[400px] lg:w-[450px] aspect-square bg-black/70 border-2 border-cyan-400 rounded-xl shadow-lg shadow-cyan-400/50 flex items-center justify-center relative overflow-hidden flex-shrink-0"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Image */}
        <img
          src="./protrait.png"
          alt="cyberhero"
          className={`
            w-full h-full object-cover rounded-xl 
            transition-all duration-400 ease-in-out
            ${hover ? "translate-y-[100%] opacity-0" : "translate-y-0 opacity-90"}
          `}
        />

        {/* Tooltip */}
        <div
          className={`
            absolute bottom-4 left-1/2 transform -translate-x-1/2
            bg-pink-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg
            ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          {randomText}
        </div>
      </div>

      {/* Description */}
      <div
        className="text-cyan-200 flex-1 w-full text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed z-10 mt-4 sm:mt-0"
        // 🔥 made description flex-1 so it wraps below the image cleanly on small screens
        style={{
          fontFamily: "'Cyberfont', monospace",
          color: "#00ffd0",
          textShadow: `
            1px 1px 2px #00ffe5,
            2px 2px 4px rgba(0,255,240,0.3)
          `,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro,
        nesciunt excepturi reprehenderit totam libero praesentium dolore eius,
        omnis ea in atque suscipit assumenda facilis sunt. Quam commodi nesciunt
        iusto facilis sapiente,
      </div>
    </div>
  );
};

export default Portrait;
