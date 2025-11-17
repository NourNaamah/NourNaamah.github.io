import { homePage } from "@db";
import { IoLogoLinkedin, IoLogoGitlab, IoMailOpen } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto min-h-[60px] h-[60px] flex items-center justify-between">
      <div className="uppercase h-[60px] flex items-center">
        <span className="text-pink-500">. </span>
        <span className="text-[12px]">n</span>
        <span className="text-[8px] !lowercase">o</span>
        <span className="text-[25px]">ur</span>
        <span className="text-pink-500">.</span>
      </div>
      <div className="grid grid-cols-4 md:gap-4 z-10">
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${homePage.email}`}
          target="_blank"
          className="text-gray-300 h-[60px] w-[60px] flex items-center justify-center  hover:text-accent transform hover:scale-150 transition-all duration-300 cursor-pointer text-[20px] "
        >
          <IoMailOpen />
        </a>
        <a
          target="_blank"
          href={homePage.linkedIn}
          className="text-gray-300 h-[60px] w-[60px] flex items-center justify-center  hover:text-accent transform hover:scale-150 transition-all duration-300 cursor-pointer text-[20px]"
        >
          <IoLogoLinkedin />
        </a>
        {/* <a
          target="_blank"
          href={homePage.gitLap}
          className="text-gray-300 h-[60px] w-[60px] flex items-center justify-center  hover:text-accent transform hover:scale-150 transition-all duration-300 cursor-pointer text-[20px]"
        >
          <IoLogoGitlab />
        </a> */}
        <a
          title="DOWNLOAD CV"
          href={homePage.cv}
          download="Nour_CV.pdf"
          className="text-gray-300 h-[60px] w-[60px] flex items-center justify-center  hover:text-accent transform hover:scale-150 transition-all duration-300 cursor-pointer text-[20px] "
        >
          <FaFileDownload />
        </a>
      </div>
    </div>
  );
};

export default Header;
