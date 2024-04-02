import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-slate-800 text-gray-300 text-center rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold active:scale-95 duration-200">
        Zin Htet
      </a>
      <a
        href="mailto:zinhtethlaing4@gmail.com"
        className=" text-sm hover:text-indigo-500 underline"
      >
        zinhtethlaing4@gmail.com
      </a>
      <p className=" text-xs mt-2 text-gray-500">
        @ Zin Htet Creative {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
