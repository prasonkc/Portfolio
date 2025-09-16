import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "All-in-One File Converter",
    description:
      "A powerful Python + Flask app that converts files and downloads from the internet.",
    image: "./project-icons/fileconverter.png",
    link: "https://github.com/prasonkc/all_in_one_converter",
  },
  {
    title: "ZenPalette",
    description:
      "Colour Palette generator for all your designing needs.",
    image: "./project-icons/colourpalette.jpg",
    link: "https://github.com/prasonkc/ZenPalette",
  },
  {
    title: "Password Manager",
    description:
      "A password Manager built in React and Express.",
    image: "./project-icons/password.png",
    link: "https://github.com/prasonkc/Password-Manager",
  },
    {
    title: "Pong",
    description:
      "A Classic Pong game in Godot",
    image: "./project-icons/pong.png",
    link: "https://github.com/prasonkc/Classic-Pong",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function DeployedProjects() {
  return (
    <motion.section
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Heading */}
      <h2
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-center mb-12 sm:mb-16"
        style={{
          fontFamily: "'Cyberfont', sans-serif",
          color: "#00ffd0",
          textShadow: `
            0 0 5px #00ffd0,
            0 0 10px #00ffd0,
            0 0 20px #00ffd0
          `,
        }}
      >
        Deployed Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}
            className="relative bg-black/60 border-2 border-cyan-400 rounded-xl shadow-lg shadow-cyan-400/30 overflow-hidden flex flex-col"
          >
            {/* Image */}
            {project.image && (
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 z-10">
              <h3
                className="text-2xl sm:text-3xl font-bold mb-3 text-pink-400"
                style={{
                  fontFamily: "'Cyberfont', sans-serif",
                  textShadow: "0 0 6px #ff00ff, 0 0 12px #ff00ff",
                }}
              >
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-cyan-200 flex-1 mb-6 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-none mt-auto inline-block text-center px-4 py-2 border-2 border-pink-500 text-pink-400 font-bold rounded-lg transition-all hover:bg-pink-500 hover:text-black"
                style={{ fontFamily: "'Cyberfont', sans-serif" }}
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
