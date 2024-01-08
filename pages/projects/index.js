import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useWindowWidth } from "../../utils/windowWidthHelper";

import ParticlesContainer from "../../components/ParticlesContainer";
import ProjectsSlider from "../../components/ProjectsSlider";

const Projects = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className="h-full">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto z-50"
      >
        <div className="flex flex-col md:flex-row justify-between items-center z-50 xl:gap-10">
          <div className="md:max-w-[400px] xl:max-w-full xl:pt-0">
            <h1 className="text-3xl xl:pt-20 xl:mb-10 md:-mt-20 md:h2 xl:h1 mb-4">
              my <span className="text-accent">projects.</span>
            </h1>
            <p className="hidden lg:flex">
              {`These are some of my showcased projects, demonstrating a range of
              skills and expertise. Please note that due to Non-Disclosure
              Agreements (NDAs), certain projects cannot be displayed publicly.
              If you're interested in learning more about my work on
              confidential projects, feel free to reach out for a private
              discussion.`}
            </p>
            <div className="xl:pt-10 py-10">
              <Link
                className="btn-primary"
                href={"https://github.com/sebbe-cell"}
                target="_blank"
              >
                my github <span className="text-accent">repositories.</span>
              </Link>
            </div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={
              windowWidth >= 1200 && windowWidth <= 1300 ? "pr-[50px] flex items-center justify-center xl:w-[700px] w-[400px] xl:relative" : "flex items-center justify-center xl:w-[700px] w-[400px] xl:relative"
            }
          >
            <ProjectsSlider />
          </motion.div>
        </div>
      </motion.div>
      <div className="w-[900px] h-full xl:absolute left-0 bottom-0 z-0">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Projects;
