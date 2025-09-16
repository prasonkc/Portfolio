import React from "react";
import { motion } from "framer-motion";

const socials = [
  { name: "GitHub", icon: "./socials/github.png", link: "https://github.com/prasonkc" },
  { name: "LinkedIn", icon: "./socials/linkedin.png", link: "https://www.linkedin.com/in/prason-kc-6782061b6/" },
  { name: "Twitter", icon: "./socials/x.png", link: "https://twitter.com/KcPrason" },
  { name: "Instagram", icon: "./socials/instagram.png", link: "https://instagram.com/prasonkc" },
  { name: "Facebook", icon: "./socials/facebook.png", link: "https://facebook.com/prason.kc.1" },
];

export default function Socials() {
  return (
    <motion.section
      className="py-32 px-6 flex flex-col items-center justify-center gap-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Contact Form */}
      <div className="w-full max-w-3xl text-center flex flex-col gap-12">
        <h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold"
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
          Contact Me
        </h2>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full cursor-none p-4 rounded-xl bg-black/50 border border-cyan-400 text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full cursor-none p-4 rounded-xl bg-black/50 border border-cyan-400 text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full cursor-none p-4 rounded-xl bg-black/50 border border-cyan-400 text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <motion.button
            type="submit"
            className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl shadow-lg shadow-cyan-400/50 hover:bg-cyan-400 transition-all cursor-none"
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
            onClick={alert("The message doesn't work because backend is offline")}
          >
            Send Message
          </motion.button>
        </form>
      </div>

      {/* Socials Footer */}
      <footer className="w-full flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 cursor-none">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 cursor-none"
              whileHover={{ scale: 1.2, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain drop-shadow-[0_0_8px_#ff00ff] hover:drop-shadow-[0_0_15px_#ff00ff] transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-400 text-sm sm:text-base text-center">
          © {new Date().getFullYear()} Prason KC. All Rights Reserved.
        </p>
      </footer>
    </motion.section>
  );
}
