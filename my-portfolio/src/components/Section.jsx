import React from "react";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Section({ children, className = "" }) {
  return (
    <motion.section
      // 🔥 Changed: use min-h-screen + vertical padding so section can grow on small screens
      className={`min-h-screen w-full flex items-center justify-center py-12 ${className}`}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      {children}
    </motion.section>
  );
}
