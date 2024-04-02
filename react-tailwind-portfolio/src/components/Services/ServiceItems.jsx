import React from "react";

const ServiceItems = ({ title, icon, description }) => {
  return (
    <div className="bg-slate-300 hover:bg-slate-200 rounded-md p-5 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 duration-300">
      <div className=" w-6 h-6 text-gray-800 dark:text-gray-300 mb-3">
        {icon}
      </div>
      <h1 className=" font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1">
        {title}
      </h1>
      <p className=" text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceItems;
