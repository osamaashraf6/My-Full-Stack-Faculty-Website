"use client";
import { servicesList } from "@/utils/data";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CardsServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices(servicesList);
  }, []);
  return (
    <>
      <section className="h-[105vh] py-20">
        <div className="container text-center">
          <h3 className="text-orange-400 text-xs font-semibold mb-3">
            WHY CHOOSE US?
          </h3>
          <h2 className="text-2xl font-bold mb-10">Our Services </h2>
          <div className="services flex flex-wrap gap-5">
            {services.map((service) => (
              <div
                className="service shadow-lg rounded w-[31.5%] p-6 flex flex-col  gap-4 hover:translate-y-[-10px] transition ease duration-300"
                key={service.id}
              >
                <div dangerouslySetInnerHTML={{ __html: service.img }} />
                <h2 className="text-sm font-bold">{service.title}</h2>
                <p className="  text-xs leading-6">{service.desc}</p>
                <Link
                  href=""
                  className="flex items-center text-xs text-indigo-500 font-semibold gap-2"
                >
                  <FontAwesomeIcon icon={faArrowRightLong} className="w-3" />
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsServices;
