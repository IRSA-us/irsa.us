"use client";
import { useState } from "react";
import { Service } from "./page";
import ServicePageLink from "./ServicePageLink";

const ServicePageLinks = ({ services }: { services: Service[] }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row pt-[100px] md:fixed md:bottom-0 overflow-auto">
      {services ? (
        services.map((service) => (
          <ServicePageLink
            service={service}
            disabled={clicked}
            onClick={() => setClicked(true)}
            key={service.name + "_link"}
          />
        ))
      ) : (
        <h2 className="text-4xl">
          <span className="text-secondary font-bold">Error 500: </span>
          Services Data Cannot be Loaded Right Now
        </h2>
      )}
    </div>
  );
};

export default ServicePageLinks;
