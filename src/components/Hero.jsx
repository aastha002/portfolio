import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
import profileImg from "../assets/Profile.jpeg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

const floatImage = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050816] text-white flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Glowing background blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[600px] h-[600px] bg-purple-500 opacity-20 blur-[180px] rounded-full z-0" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-[160px] rounded-full z-0" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-center gap-20">
        {/* Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            variants={textVariant(0)}
            className="text-indigo-400 text-sm uppercase tracking-wider mb-3 bg-indigo-500/10 inline-block px-4 py-1 rounded-full font-semibold"
          >
            Software Developer
          </motion.p>
          <motion.h1
            variants={textVariant(0.2)}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Hi, I'm <span className="text-indigo-400">Aastha Jha</span>
          </motion.h1>
          <motion.p
            variants={textVariant(0.4)}
            className="mt-5 text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Driven by a passion for technology and design, I build cutting-edge
            web experiences that not only function beautifully but also engage
            users. With expertise in modern web development, from front-end
            frameworks like React to UX/UI principles, I bring ideas to life
            with clean, efficient code and eye-catching designs. Let’s turn your
            vision into reality with innovative and responsive solutions.
          </motion.p>

          <motion.div
            variants={textVariant(0.6)}
            className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6"
          >
            <a
              href="/AasthaJhaCV.pdf"
              download
              className="flex items-center gap-2 px-6 py-2 border border-indigo-400 text-indigo-400 rounded-full hover:bg-indigo-400 hover:text-black transition-all duration-300 shadow-md"
            >
              <FaDownload />
              Download CV
            </a>
            <div className="flex items-center gap-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/aastha-jha-979948271/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/aastha002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:aasthajha002@gmail.com"
                className="hover:text-indigo-400 transition"
              >
                <FaEnvelope />
              </a>

              <a
                href="tel:+916206604161"
                className="hover:text-indigo-400 transition"
              >
                <FaPhoneAlt />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={floatImage}
          animate="animate"
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#111] flex items-center justify-center shadow-2xl shadow-indigo-500/10 group overflow-hidden">
            <div className="absolute inset-0 border-[6px] border-indigo-400 border-dashed rounded-full animate-spin-slow z-0 blur-sm opacity-25" />
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full z-10 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
