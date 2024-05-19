import React from 'react';
import Profile from "../assets/photo.png";

const IntroSection = () => {
  return (
    <section>
      <div className="container m-auto px-10 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
        <div className="md:mt-36">
          <h2 className="font-bold text-4xl">Hello, I'm Talal,</h2>
          <div>
            <h2 className="font-bold text-4xl mt-1 gradiant-text">
              frontend developer
            </h2>
          </div>
          <div>
            <p className="mt-4 text-gray-400">
              With a background in CS, I bring a unique
              perspective to web development. My focus is on creating efficient and user-friendly web applications.
            </p>
            <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
              Download resume
            </button>
          </div>
        </div>
        <div className="">
          <div className="">
            <img
              src={Profile}
              className="z-10 w-[280px] m-auto sm:w-[600px] overflow-hidden rounded-full bg-transparent border-[#2B93EC] border-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
