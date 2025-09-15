import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Node.js", icon: "/icons/node-js.png" },
  { name: "Tailwind", icon: "/icons/tailwind.png" },
  { name: "Express", icon: "/icons/express.png" },
  { name: "C/C++", icon: "/icons/c.png" },
  { name: "Java", icon: "/icons/java.png" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "Git/Github", icon: "/icons/github.png" },
  { name: "Linux", icon: "/icons/linux.png" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <motion.section
      className="py-32 px-6 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <h2
        className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-center mb-16"
        style={{
          fontFamily: "'Cyberfont', sans-serif",
          color: "#ff00ff",
          textShadow: `
            0 0 5px #ff00ff,
            0 0 10px #ff00ff,
            0 0 20px #ff00ff
          `,
        }}
      >
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            className="relative p-6 border-2 border-pink-500 rounded-xl text-center text-white overflow-hidden"
            whileHover={{ scale: 1.08 }}
          >
            {/* Background Glow Layer */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>

            {/* Neon Border */}
            <div className="absolute inset-0 border border-pink-500 rounded-xl opacity-50 hover:animate-neon-border pointer-events-none"></div>

            {/* Skill Icon */}
            {skill.icon && (
              <img
                src={skill.icon}
                className="w-16 h-16 mx-auto mb-4 filter drop-shadow-[0_0_10px_#ff00ff] transition-transform duration-300 hover:scale-110"
              />
            )}

            {/* Skill Name */}
            <span
              className="text-2xl sm:text-3xl font-bold transition-colors duration-300 hover:text-purple-400"
              style={{
                fontFamily: "'Cyberfont', sans-serif",
                textShadow: "0 0 5px #ff00ff, 0 0 10px #ff00ff",
              }}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
