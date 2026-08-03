import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="carousel w-full ">
          {bannerData.map((banner, index) => (
            <div
              id={`slide${index + 1}`}
              className="carousel-item relative w-full h-[70vh] rounded-xl"
              key={index}
            >
              <Image
                src={`/assets/images/banner/${index + 1}.jpg`}
                className="w-full rounded-xl"
                height={300}
                width={800}
                alt={banner.title}
              />
              <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-bold">{banner.title}</h2>
                  <p>{banner.description}</p>
                  <div>
                    <button className="btn btn-primary mr-5">
                      Discover More
                    </button>
                    <button className="btn btn-outline btn-secondary">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={banner.previous} className="btn btn-circle mr-5">
                  ❮
                </a>
                <a href={banner.next} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const bannerData = [
  {
    title: "Affordable price for car servicing ",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    previous: "#slide4",
  },
  {
    title: "Quality service for your car",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    previous: "#slide1",
  },
  {
    title: "Expert mechanics at your service",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    previous: "#slide2",
  },
  {
    title: "Your car deserves the best care",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    previous: "#slide3",
  },
];
