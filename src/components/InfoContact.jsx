"use client";
import { infoContactList } from "@/utils/data";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const InfoContact = () => {
  const [infoContact, setInfoContact] = useState([]);
  useEffect(() => {
    setInfoContact(infoContactList);
  }, []);
  return (
    <>
      <section className="h-[70vh] bg-gray-50 pt-20">
        <div className="container text-center">
          <h3 className="text-orange-400 text-xs font-semibold mb-3">
            FIND US
          </h3>
          <h2 className="text-2xl font-bold mb-10">Contact Info</h2>
          <div className="infoContact flex flex-wrap gap-5">
            {infoContact.map((item) => (
              <div
                className="item border-t-2 bg-white border-indigo-500 shadow-lg rounded w-[31.5%] p-6 flex flex-col  gap-4 hover:translate-y-[-10px] transition ease duration-300"
                key={item.id}
              >
                <h2 className="text-sm font-bold">{item.title}</h2>
                <p className="  text-xs leading-6">{item.desc}</p>
                <p className="text-xs text-orange-500 ">{item.phone}</p>
                <span className="text-xs">{item.email}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoContact;
