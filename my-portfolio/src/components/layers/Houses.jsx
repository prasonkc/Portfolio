import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Houses = () => {
  const { scrollY } = useScroll();
  const house1Y = useTransform(scrollY, [0, 1000], [0, 200]);
  const house2Y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div className="relative h-[200vh] overflow-hidden">
      <motion.img
        src="./layers/house1.png"
        alt="House 1"
        className="absolute bottom-0 left-[20%] w-64"
        style={{ y: house1Y }}
      />
      <motion.img
        src="./layers/house2.png"
        alt="House 2"
        className="absolute bottom-0 right-[20%] w-64"
        style={{ y: house2Y }}
      />
      <div className="h-[200vh]" /> {/* just filler scroll */}
    </div>
  );
};

