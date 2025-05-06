import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white mt-10 border-t border-gray-700 px-6 py-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Social & Contact Icons */}
        <div className="flex items-center flex-wrap gap-6 text-xl">
          <a
            href="https://github.com/aastha002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aastha-jha-979948271/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-transform transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:aasthajha002@gmail.com"
            className="hover:text-teal-400 transition-transform transform hover:scale-125"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+916206604161"
            className="hover:text-teal-400 transition-transform transform hover:scale-125"
          >
            <FaPhoneAlt />
          </a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm text-center md:text-right mt-4 md:mt-0 font-medium"
        >
          Made by Aastha
        </motion.p>
      </div>

      {/* Scroll to top button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 p-3 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 transition-all"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
