import React, { useState } from "react";
import { motion } from "framer-motion";

const Portrait = () => {
  const [hover, setHover] = useState(false);

  // Array of texts
  const texts = ["I'm shy!", "Please dont touch me", "NO!", "help!", "pls hire me 😭"];
  const randomText = texts[Math.floor(Math.random() * texts.length)];

  return (
<motion.div
  className="w-full sm:w-[90%] md:w-[60vw] mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-center sm:items-start px-4 mb-8"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.1 }}   
  transition={{ duration: 0.8, ease: "easeOut" }}
>

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
            transition-all duration-500 ease-in-out
            ${hover ? "translate-y-[100%] opacity-0" : "translate-y-0 opacity-90"}
          `}
        />

        {/* Tooltip */}
        <div
          className={`
            absolute bottom-4 left-1/2 transform -translate-x-1/2
            bg-pink-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transition-all duration-500
            ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          {randomText}
        </div>
      </div>

      {/* Description */}
      <motion.div
        className="text-cyan-200 flex-1 w-full text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed z-10 mt-4 sm:mt-0"
        style={{
          fontFamily: "'Cyberfont', monospace",
          color: "#00ffd0",
          textShadow: `
            1px 1px 2px #00ffe5,
            2px 2px 4px rgba(0,255,240,0.3)
          `,
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        Hey, welcome to my little corner of the internet. I’m a computer science student who likes turning weird ideas into fun (and sometimes stupid) projects. Stick around and see what I’ve been playing with!
      </motion.div>
    </motion.div>
  );
};

export default Portrait;
