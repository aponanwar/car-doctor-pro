import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/about_us/person.jpg"
              alt="Person"
              className="rounded-lg w-full h-auto"
              width={500}
              height={300}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="mb-4">
              We are a team of passionate professionals dedicated to providing
              top-notch services in the automotive industry. Our mission is to
              ensure customer satisfaction through quality workmanship and
              exceptional service.
            </p>
            <p className="mb-4">
              With years of experience, we have built a reputation for
              reliability and excellence. We take pride in our work and strive
              to exceed our customers' expectations every time.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
