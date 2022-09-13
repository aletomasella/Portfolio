import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Social = () => {
  return (
    <>
      <div className="w-full bg-[#0a192f] flex justify-center items-center p-4 text-gray-300 md:hidden">
        <div className="flex">
          <li className="w-[70px] h-[60px] flex justify-between items-center ml-[1px] bg-blue-600">
            <a
              className="flex justify-between items-center text-gray-300"
              href="https://www.linkedin.com/in/aletomasella/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[70px] h-[60px] flex justify-between items-center ml-[1px] bg-gray-900">
            <a
              className="flex justify-between items-center text-gray-300"
              href="https://github.com/aletomasella"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[70px] h-[60px] flex justify-between items-center ml-[1px] bg-red-600">
            <a
              className="flex justify-between items-center text-gray-300"
              href="mailto:aletomasella09@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[70px] h-[60px] flex justify-between items-center ml-[1px] bg-gray-600">
            <a
              className="flex justify-between items-center text-gray-300"
              href="https://drive.google.com/file/d/1p7T8ie_3sadRiSTDEvy0Lcktag21YQpv/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Social;
