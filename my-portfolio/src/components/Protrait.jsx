import React from "react";

const Portrait = () => {
  return (
    <div className="flex gap-10 mx-10 md:mx-85 sm:mx-10 flex-col sm:flex-row">
      <div className="cyberpunk-frame w-80 md:w-[450px] h-80 md:h-[450px] bg-black/70 border-2 border-cyan-400 rounded-xl shadow-lg shadow-cyan-400/50 flex items-center justify-center relative overflow-hidden">
        {/* Portrait inside the window, flush with frame */}
        <img
          src="/protrait.png"
          alt="cyberhero"
          className="w-full h-full object-cover rounded-[inherit] opacity-90"
        />
      </div>
      <div className="desc text-white w-[60%] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt porro, nesciunt excepturi reprehenderit totam libero praesentium dolore eius, omnis ea in atque suscipit assumenda facilis sunt. Quam commodi nesciunt iusto facilis sapiente, expedita perferendis ratione fugit suscipit facere repellat assumenda exercitationem corrupti cupiditate totam molestiae, iste vero corporis quia eaque illo nam reiciendis. Eligendi quas quidem, dolores accusamus commodi voluptas autem praesentium. Alias accusantium nam labore rerum doloribus ipsam magnam optio odit commodi illum?
      </div>
    </div>
  );
};

export default Portrait;
