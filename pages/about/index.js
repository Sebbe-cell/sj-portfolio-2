import ParticlesContainer from "../../components/ParticlesContainer";
import Link from "next/link";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

const About = () => {
  return (
    <div className="h-full">
      <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
        <h1 className="h1">about <span className="text-accent">me.</span></h1>
        <p>
          {`My name is Sebastian, and I'm a dedicated developer with 2 years of
          experience in .NET and React. During my professional journey, I've
          focused on both Frontend and Backend development.`}
        </p>
        <p>
          {`In Frontend, I've
          crafted and implemented user-friendly interfaces for web applications.
          Simultaneously, I've actively contributed to Backend tasks,
          particularly in .NET C# and SQL. I have experience in building
          databases and handling existing systems. My ability to collaborate
          with both Frontend and Backend developers has been crucial in ensuring
          a seamless integration of user interfaces with system functionalities.`}
        </p>
        <div className="flex items-center gap-x-5 text-lg pt-10">
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
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default About;
