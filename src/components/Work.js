import React from "react";

const Work = () => {
  return (
    <>
      <div
        name="work"
        className="w-full bg-[#0a192f] md:h-screen text-gray-300"
      >
        {/* container  */}
        <div className="max-w-[1000px] max-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="p-8">
            <p className="text-4xl font-bold border-b-4 border-orange-400">
              Work
            </p>
            <p className="p-6">Check out some of my recent work</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              <div>
                <span></span>
                <div>
                  <a href="/">
                    <button></button>
                  </a>

                  <a href="/">
                    <button></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
