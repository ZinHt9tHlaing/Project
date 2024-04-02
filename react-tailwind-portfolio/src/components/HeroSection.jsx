import React from "react";

const HeroSection = () => {
  return (
    <div id="hero" className=" flex flex-col justify-center items-center py-20">
      <div className=" text-center">
        <h1 className=" text-3xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold font-heading dark:text-indigo-00">
          Hi, I'm Zin Htet
        </h1>
        <p className=" text-base md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <a
          href="#works"
          className=" inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md active:scale-95 duration-300"
        >
          See Works
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
