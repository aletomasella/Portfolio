import React from "react";
import Social from "./Social";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-gray-300 sm:mt-[250px] md:mt-1"
      >
        <form
          action="https://getform.io/f/f56cacb8-3412-4e8c-899b-0e6cab81488c"
          method="POST"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-orange-400">
              Contact
            </p>
            <p className="py-4">
              Submit the form below or send me an email -
              aletomasella09@gmail.com
            </p>
          </div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className=" p-2 bg-[#ccd6f6] text-black"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] text-black"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            name="message"
            className="bg-[#ccd6f6] p-2 text-black"
            placeholder="Message"
            rows={"10"}
          ></textarea>
          <button className="text-white border-2 hover:bg-orange-500 px-4 py-3 my-8 mx-auto rounded">
            Send
          </button>
        </form>
      </div>
      <Social />
    </>
  );
};

export default Contact;
