"use client";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { profsList } from "@/utils/data";

const Profs = () => {
  const [profs, setProfs] = useState([]);
  useEffect(() => {
    setProfs(profsList);
  }, []);
  return (
    <>
      <section className="profs h-[110vh] overflow-x-scroll overflow-y-hidden">
        <div className="text-center">
          <h3 className="text-orange-400 text-xs font-semibold mb-4">
            TEAM MEMBER
          </h3>
          <h2 className="text-2xl font-bold mb-16">Expert PROFS</h2>
        </div>
        <div className="items flex w-max">
          {profs.map((prof) => (
            <div className="item w-[33vw]  border-r p-20" key={prof.id}>
              <div className="shadow-lg p-5 rounded flex flex-col items-center justify-center relative pt-24 h-[70vh]">
                <div className="profresponsive rounded-full bg-indigo-400 p-1 shadow-lg absolute top-[-16%] left-[31%]">
                  <Image
                    src={prof.img}
                    width={120}
                    height={120}
                    className="rounded-full h-[18vh]"
                  />
                </div>
                <div className="flex gap-24 mb-5">
                  <h2 className="text-orange-400 text-sm font-semibold mb-4">
                    PROF: {prof.name}
                  </h2>
                  <span className="text-indigo-400 text-sm font-semibold mb-4">
                    {prof.specialization}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-6 mb-4">
                  {prof.desc}
                </p>
                <span className="text-sm font-bold mb-4">Education: </span>
                <p className="text-xs text-gray-500 leading-6 mb-4">
                  {prof.education}
                </p>
                <div className="bg-indigo-500 p-2 w-full mb-4">
                  <span className="text-sm text-orange-400">Office: </span>
                  <span className="text-xs text-white">{prof.office}</span>
                </div>
                <div className="flex gap-40">
                  <span className="text-xs">{prof.phone}</span>
                  <span className="text-sm cursor-pointer">
                    <FontAwesomeIcon icon={faEnvelope} className="w-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Profs;
