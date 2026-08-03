import Image from "next/image";
import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <Image
            src={service.img}
            alt={service.title}
            className="rounded-xl"
            width={400}
            height={300}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.title}</h2>
          <p>{service.description.slice(0, 100)}...</p>

          <div className="card-actions justify-between w-full mt-4">
            <p className="text-xl text-red-400 font-semibold">
              ${service.price}
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
