import ParticlesContainer from "../../components/ParticlesContainer";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto"
      >
        <div>
          <h1 className="h1">Contact <span className="text-accent">me</span></h1>
        </div>
        <form className="gap-y-6 flex flex-col xl:max-w-[600px] sm:w-full items-center z-10">
          <input type="text" className="input" placeholder="Name" />
          <input type="text" className="input" placeholder="Email" autoComplete="off" />
          <input type="text" className="input" placeholder="Subject" />
        </form>
      </motion.div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Contact;
