"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { testimonialsFeedback, profsList } from "@/utils/data";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    setTestimonials(testimonialsFeedback);
  }, []);
  return (
    <>
      <section className="h-[95vh] text-center pt-20">
        <div className="container">
          <h3 className="text-orange-400 text-xs font-semibold mb-4">
            OUR TESTIMONIAL
          </h3>
          <h2 className="text-2xl font-bold mb-16">Student Feedback</h2>
          <div className="items flex gap-4">
            {testimonials.map((testimonial) => (
              <div
                className="item bg-gray-50 rounded p-5 flex flex-col gap-5 items-center"
                key={testimonial.id}
              >
                <div className="stars flex">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="w-4 text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="w-4 text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="w-4 text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="w-4 text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="w-4 text-yellow-400"
                  />
                </div>
                <p className="text-xs leading-6 text-justify italic">
                  {testimonial.desc}
                </p>
                <div className="feedbackresponsive bg-white p-1 rounded-full">
                  <Image
                    src={testimonial.img}
                    width={70}
                    height={100}
                    className="rounded-full border-4 border-indigo-500"
                  />
                </div>
                <h2 className="text-sm font-bold">{testimonial.name}</h2>
                <span className="text-xs text-indigo-600">
                  {testimonial.country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
