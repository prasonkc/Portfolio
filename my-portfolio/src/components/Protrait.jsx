import React from "react";

const Portrait = () => {
  return (
    <div className="w-[67vw] mx-auto flex flex-col sm:flex-row gap-10 items-center sm:items-start">
      {/* Portrait frame */}
      <div className="cyberpunk-frame w-[70vw] sm:w-[400px] md:w-[450px] aspect-square bg-black/70 border-2 border-cyan-400 rounded-xl shadow-lg shadow-cyan-400/50 flex items-center justify-center relative overflow-hidden">
        <img
          src="/protrait.png"
          alt="cyberhero"
          className="w-full h-full object-cover rounded-[inherit] opacity-90"
        />
      </div>

      {/* Description */}
      <div
        className="text-cyan-200 w-full sm:w-[60%] text-xl sm:text-2xl md:text-3xl leading-relaxed z-10"
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
