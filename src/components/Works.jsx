import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_code_link2,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`project-${name}`}
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback.jpg";
            }}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                aria-label="GitHub repository"
                title="View Frontend Code"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {source_code_link2 && (
              <div
                onClick={() => window.open(source_code_link2, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                aria-label="GitHub repository"
                title="View Backend Code"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] sm:text-[16px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="relative z-0">
      {/* Heading Section */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="w-full px-4 sm:px-6"
      >
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Projects.</h2>
      </motion.div>

      {/* Description Paragraph */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        animate="show"
        className="w-full px-4 sm:px-6 mt-4"
      >
        <p className="text-secondary text-[16px] sm:text-[18px] leading-[28px] max-w-3xl">
          A showcase of real-world projects highlighting my technical skills,
          problem-solving ability, and hands-on experience. Each project
          includes a brief overview and source code links.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 w-full">
        {projects?.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <motion.p
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            className="text-white text-center col-span-full py-10"
          >
            No projects to display at the moment.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
