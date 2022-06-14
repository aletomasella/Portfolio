import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import PostGreSQL from "../assets/postgres.png";
import Tailwind from "../assets/tailwind.png";

import ReactIcon from "../assets/react.png";

const Skills = () => {
  return (
    <>
      <div name="skills" className="bg-[#0a192f] text-gray-300">
        {/* container */}
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-orange-400">
              Experience
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={HTML} className="w-20 mx-auto" alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={CSS} className="w-20 mx-auto" alt="CSS icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                src={JavaScript}
                className="w-20 mx-auto"
                alt="JavaScript icon"
              />
              <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={ReactIcon} className="w-20 mx-auto" alt="React icon" />
              <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={GitHub} className="w-20 mx-auto" alt="GitHub icon" />
              <p className="my-4">GitHub</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={Node} className="w-20 mx-auto" alt="Node icon" />
              <p className="my-4">Node</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                src={Tailwind}
                className="w-20 mx-auto"
                alt="Tailwind icon"
              />
              <p className="my-4">Tailwind</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                src={PostGreSQL}
                className="w-20 mx-auto"
                alt="PostGresSQL icon"
              />
              <p className="my-4">PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
