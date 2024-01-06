import Link from "next/link";
import {
  RiFacebookBoxLine,
  RiGoogleLine,
  RiLinkedinLine,
  RiGithubLine
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <div>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGoogleLine/>
      </Link>
      </div>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine/>
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
    </div>
  );
};

export default Socials;
