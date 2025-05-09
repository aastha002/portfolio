import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Custom hook to detect mobile screen
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

// 3D icon mesh
const TechIcon = ({ icon }) => {
  const texture = useTexture(icon);
  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial map={texture} emissiveIntensity={0.5} />
    </mesh>
  );
};

// 3D Canvas Viewer
const TechCanvas = ({ icon }) => (
  <Canvas camera={{ position: [0, 0, 4] }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 2, 2]} />
    <Suspense
      fallback={
        <Html center className="text-white">
          Loading...
        </Html>
      }
    >
      <TechIcon icon={icon} />
    </Suspense>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
  </Canvas>
);

// Tech Card with conditional 3D/static rendering
const TechCard = ({ tech, index }) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="group relative w-28 h-32 sm:w-32 sm:h-36 bg-[#1c1c24] rounded-xl shadow-md border border-gray-700/30 hover:shadow-indigo-500/30 transform hover:scale-105 transition-all duration-300">
        <div className="w-full h-20 rounded-full overflow-hidden flex items-center justify-center">
          {isMobile ? (
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 object-contain"
              loading="lazy"
            />
          ) : (
            <TechCanvas icon={tech.icon} />
          )}
        </div>
        <p className="mt-2 text-xs sm:text-sm text-gray-300 text-center font-semibold group-hover:text-white transition-colors duration-300">
          {tech.name}
        </p>
      </div>
    </motion.div>
  );
};

// Main Tech Section
const Tech = () => {
  return (
    <section className="w-full text-white px-4 sm:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-sm sm:text-base text-indigo-400 uppercase tracking-widest font-medium">
          Tech Stack
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2">
          Tools & Skills
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          A visual showcase of the technologies I use to craft scalable,
          user-focused digital experiences — from frontend frameworks to backend
          tools.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
