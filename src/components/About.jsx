import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 p-[1px] rounded-[20px] shadow-lg hover:shadow-indigo-500/40 transition duration-300"
    >
      <div className="bg-tertiary rounded-[20px] py-8 px-10 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-opacity-90 transition-all duration-300">
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
        <h3 className="text-white text-[20px] font-semibold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[32px]"
      >
        I'm a passionate software developer who specializes in building
        immersive digital experiences using React, Node.js, and other
        cutting-edge web technologies. With a strong foundation in clean code,
        responsive design, and user-centric development, I transform ideas into
        functional, elegant solutions.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
