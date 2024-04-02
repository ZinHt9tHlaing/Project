import React from "react";
import SectionTitle from "./SectionTitle";
import emptySvg from "./images/hero.jpg";

const About = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-10">
      <div className=" w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className=" text-gray-600 dark:text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          inventore voluptatibus ducimus dolorem, repudiandae iste eum
          laudantium eligendi id dignissimos et quod autem eius possimus nam non
          dolor? Distinctio accusantium, velit iure quia minus delectus earum
          itaque magnam est dignissimos.
        </p>
        <a
          href="mailto:zinhtethlaing4@gmail.com"
          className="block mt-3 md:text-lg font-heading text-gray-700 dark:text-gray-300 underline hover:text-indigo-600 dark:hover:text-indigo-500 active:scale-95 duration-200"
        >
          zinhtethlaing4@gmail.com
        </a>
      </div>
      <img
        src={emptySvg}
        className=" w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
};

export default About;
