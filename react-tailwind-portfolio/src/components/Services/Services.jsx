import React from "react";
import SectionTitle from "../SectionTitle";
import ServiceItems from "./ServiceItems";
import ServicesData from "../data/ServicesData";


const Services = () => {
  return (
    <div className="py-12">
      <SectionTitle>Our Services</SectionTitle>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ServicesData.map((service) => (
          <ServiceItems
            key={service.title}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
