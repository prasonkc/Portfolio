import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  // Split text into letters
  const letters = "PRASON KC".split("");

  const randoms = useMemo(
    () =>
      letters.map(() => ({
        x: Math.random() * 200 - 100, // random X between -100 and 100
        y: Math.random() * 300 + 100, // random Y between 100 and 400
        rotate: Math.random() * 60 - 30, // random rotation between -30° and 30°
      })),
    []
  );

  return (
    <div className="flex items-center justify-center px-2 overflow-hidden">
      <div className="cybertext tracking-wider leading-relaxed text-[12vw] font-extrabold text-center text-white flex">
        {letters.map((char, i) => {
          const x = useTransform(scrollY, [0, 200], [0, randoms[i].x]);
          const y = useTransform(scrollY, [0, 200], [0, randoms[i].y]);
          const rotate = useTransform(scrollY, [0, 200], [0, randoms[i].rotate]);
          const opacity = useTransform(scrollY, [0, 150], [1, 0]); // 👈 fade out sooner

          return (
            <motion.span
              key={i}
              style={{ x, y, rotate, opacity }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
