import React from "react";
import ParticlesContainer from "../../components/ParticlesContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ProjectsSlider from "../../components/ProjectsSlider";

const Projects = () => {
  return (
    <div className="h-full">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto z-50"
      >
        <div className="flex flex-col xl:flex-row justify-between items-center z-50 xl:gap-10">
          <div>
            <h1 className="xl:h1 text-3xl pt-20 mb-10">
              my <span className="text-accent">projects.</span>
            </h1>
            <p className="hidden xl:flex">
              {`These are some of my showcased projects, demonstrating a range of
              skills and expertise. Please note that due to Non-Disclosure
              Agreements (NDAs), certain projects cannot be displayed publicly.
              If you're interested in learning more about my work on
              confidential projects, feel free to reach out for a private
              discussion.`}
            </p>
          </div>
          <div className="flex items-center justify-center xl:w-[700px] w-[400px] xl:relative">
            <ProjectsSlider />
          </div>
        </div>
      </motion.div>
      <div className="w-[900px] h-full xl:absolute left-0 bottom-0 z-0">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Projects;
