import { useState, useEffect } from "react";
import Link from "next/link";

import { RiGoogleLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { useWindowHeight } from "../utils/windowHeightHelper";

const Socials = () => {

  const windowHeight = useWindowHeight();

  return (
    <div
      className={`${
        windowHeight < 668 ? "hidden" : "flex items-center gap-x-5 text-lg"
      }`}
    >
      <Link
        href={"https://github.com/sebbe-cell"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/sebastian-johnsson-246899246"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href="mailto: sebbelito.johnsson@gmail.com"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGoogleLine />
      </Link>
      <Link
        href="mailto: sebastian_johnsson@outlook.com"
        className="hover:text-accent transition-all duration-300"
      >
        <PiMicrosoftOutlookLogo />
      </Link>
    </div>
  );
};

export default Socials;
