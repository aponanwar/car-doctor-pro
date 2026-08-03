import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { services } from "../../lib/services";

export default function Services() {
  console.log(services);
  return (
    <div className="text-center my-12">
      <h1 className=" text-red-600 font-bold">Service</h1>
      <h1 className="text-2xl font-semibold">Our Service Area</h1>
      <p className="text-gray-600 container mx-auto">
        We provide comprehensive car servicing solutions across a wide range{" "}
        <br></br>of areas, ensuring your vehicle runs smoothly and efficiently.
      </p>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}
