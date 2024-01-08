import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left xl:pr-10 h-full container mx-auto">
          {/* title desktop */}
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:block xl:h1 text-[36px] pt-10 xl:p-0"
          >
            Fullstack Developer, shaping ideas into effective solutions
            specializing in{" "}
            <TypeAnimation
              sequence={[
                "React development",
                1000,
                ".NET development",
                1000,
                "Web design",
                1000,
                "API integrations",
                1000,
              ]}
              speed={8}
              deletionSpeed={60}
              repeat={Infinity}
              style={{color: 'rgb(241 48 36)'}}
            />
          </motion.h1>

          {/* mobile */}
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:hidden h1 md:h2 xl:h1 pt-6 md:pt-1"
          >
            Agile Full Stack Developer and 
            <br/>
            <TypeAnimation
              sequence={[
                "Innovater",
                1000,
                ".NET developer",
                1000,
                "Web designer",
                1000,
                "React developer",
                1000,
              ]}
              speed={20}
              repeat={Infinity}
              style={{color: 'rgb(241 48 36)'}}
            />
          </motion.h1>

          {/* subtitle desktop */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex max-w-xl mx-0 mb-10"
          >
            {`Hi, I'm Sebastian, a Full Stack Developer based in Sweden.
            Enthusiastic about crafting exceptional digital solutions, I
            specialize in full-stack development. With a passion for connecting
            people and fostering collaboration, I thrive in team environments.`}
          </motion.p>

          {/* mobile */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:hidden md:max-w-xl max-w-sm mx-auto mb-1"
          >
            {`Hi, I'm Sebastian, a Full Stack Developer based in Sweden.
            Enthusiastic about crafting exceptional digital solutions, I
            specialize in full-stack development.`}
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
