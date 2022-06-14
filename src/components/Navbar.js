import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        {/* logo */}
        <div className="flex">
          <img src={logo} alt="Logo" style={{ width: "70px" }} />
        </div>
        {/* menu */}

        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

        {/* hamburger */}
        <div onClick={handleNav} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
        {/* social icon */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-2">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/aletomasella/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-gray-900">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/aletomasella"
                target="_blank"
                rel="noreferrer"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-red-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:aletomasella09@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-gray-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://drive.google.com/file/d/1M4FSaJtsH63E4qI_o7Nu8n4cboDx5SZU/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                CV <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
