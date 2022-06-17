import React from "react";

const About = () => {
  return (
    <>
      <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
        {/* container */}
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="border-b-4 border-orange-500 text-4xl font-bold inline">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I'm Alejandro, nice to meet you.</p>
            </div>
            <div>
              <p>
                Developer Full Stack and Veterinarian. I worked as a veterinary
                in a private business dedicated to Animal Production, but I
                always liked technology, and since I started learning
                programming I discovered a new vocation for myself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
