import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({
  index,
  name,
  description,
  orgIcon,
  link,
  tags,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full shadow-lg shadow-indigo-500/10 cursor-pointer"
  >
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-3">
        {orgIcon && (
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            src={orgIcon}
            alt={`${name} logo`}
            className="w-10 h-10 object-contain rounded"
          />
        )}
        <div className="flex flex-col">
          <h3 className="text-white text-[18px] font-semibold">{name}</h3>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        className="text-indigo-400 hover:text-indigo-300 transition"
        title="View Certificate"
      >
        <FaExternalLinkAlt size={18} />
      </motion.button>
    </div>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-white tracking-wider text-[15px] mt-2"
    >
      {description}
    </motion.p>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <motion.span
          key={`${name}-${tag.name}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
          className={`text-[12px] ${tag.color} bg-[#1e1e3f] px-2 py-1 rounded-full`}
        >
          #{tag.name}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Achievements</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
