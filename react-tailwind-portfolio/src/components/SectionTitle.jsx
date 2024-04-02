import React from "react";

const SectionTitle = ({ children, id }) => {
  return (
    <div
      id={id && id}
      className=" text-2xl mb-5 font-bold text-indigo-600 dark:text-indigo-500"
    >
      {children}
    </div>
  );
};

export default SectionTitle;
