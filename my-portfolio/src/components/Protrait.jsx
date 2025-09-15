import React from "react";

const Portrait = () => {
  return (
    <div className="flex gap-10 mx-10 md:mx-85 sm:mx-5 flex-col sm:flex-row">
      <div className="cyberpunk-frame w-80 md:w-[450px] h-80 md:h-[450px] bg-black/70 border-2 border-cyan-400 rounded-xl shadow-lg shadow-cyan-400/50 flex items-center justify-center relative overflow-hidden md:mx-0 mx-auto">
        {/* Portrait inside the window, flush with frame */}
        <img
          src="/protrait.png"
          alt="cyberhero"
          className="w-full h-full object-cover rounded-[inherit] opacity-90"
        />
      </div>

      {/* Description */}
      <div
        className="text-cyan-200 w-[100%] md:w-[60%] text-3xl z-10"
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
        iusto facilis sapiente, expedita perferendis ratione fugit suscipit
        facere repellat assumenda exercitationem corrupti cupiditate totam
        molestiae, iste vero corporis quia eaque illo nam reiciendis. Eligendi
        quas quidem, dolores accusamus commodi voluptas autem praesentium. Alias
        accusantium na
      </div>
    </div>
  );
};

export default Portrait;
