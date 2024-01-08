import Link from "next/link";
import { motion } from "framer-motion";

// icons
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

import { fadeIn } from "../../variants";

// components 
import DownloadButton from "../../components/DownloadButton";
import ParticlesContainer from "../../components/ParticlesContainer";

const About = () => {
  return (
    <div className="h-full">
      <div className="text-center flex flex-col justify-center xl:text-left h-full xl:max-w-4xl container mx-auto">
        <h1 className="h1 pt-10 xl:pt-0">
          about <span className="text-accent">me.</span>
        </h1>
        <p className="text-[14px] md:text-[16px] md:pb-2">
          {`My name is Sebastian, and I'm a dedicated developer with 2 years of
          experience in .NET and React. During my professional journey, I've
          focused on both Frontend and Backend development.`}
        </p>
        <p className="text-[12px] md:text-[16px]">
          {`In Frontend, I've
          crafted and implemented user-friendly interfaces for web applications.
          Simultaneously, I've actively contributed to Backend tasks,
          particularly in .NET C# and SQL. I have experience in building
          databases and handling existing systems. My ability to collaborate
          with both Frontend and Backend developers has been crucial in ensuring
          a seamless integration of user interfaces with system functionalities.`}
        </p>
        <div className="hidden xl:flex items-center gap-x-5 text-lg pt-4 -mb-10 md:-mb-0">
          <Link
            href={""}
            className="hover:text-accent transition-all duration-300"
          >
            <RiGithubLine style={{ fontSize: 40 }} />
          </Link>
          <Link
            href={""}
            className="hover:text-accent transition-all duration-300"
          >
            <RiLinkedinLine style={{ fontSize: 40 }} />
          </Link>
          <Link
            href={""}
            className="hover:text-accent transition-all duration-300"
          >
            <PiMicrosoftOutlookLogo style={{ fontSize: 40 }} />
          </Link>
        </div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex lg:pt-10 pt-2 justify-center"
        >
          <DownloadButton />
        </motion.div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default About;
