"use client";
import { chooseList } from "@/utils/data";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ChooseContact = () => {
  const [contactTypes, setContactTypes] = useState([]);
  useEffect(() => {
    setContactTypes(chooseList);
  }, []);
  return (
    <>
      <section className="h-[95vh] pt-20">
        <div className="container text-center">
          <h3 className="text-orange-400 text-xs font-semibold mb-3">Or</h3>
          <h2 className="text-2xl font-bold mb-10">Choose Contact</h2>
          <div className="contactTypes flex flex-wrap gap-5">
            {contactTypes.map((contactType) => (
              <div
                className={`contactType ${
                  (contactType.id === 1 || contactType.id === 3) &&
                  "translate-y-[30px]"
                } 
                shadow-lg rounded w-[31.5%] p-6 flex flex-col  gap-4 hover:translate-y-[-10px] transition ease duration-300`}
                key={contactType.id}
              >
                <div
                  className={`contactType-responsive ${
                    contactType.id === 1 && "bg-orange-500"
                  }
                  ${contactType.id === 2 && " bg-indigo-500"}
                  ${contactType.id === 3 && "bg-red-500"} rounded
                  `}
                >
                  <Image
                    src={contactType.img}
                    alt="contacttypeImg"
                    width={100}
                    height={100}
                  />
                </div>
                <h2 className="text-sm font-bold">{contactType.title}</h2>
                <p className="  text-xs leading-6">{contactType.desc}</p>
                <Link
                  href={`/contact/${contactType.id}?search=specificcontact`}
                  className={`flex items-center text-xs w-fit text-white p-2 rounded ${
                    contactType.id === 1 && "bg-orange-500"
                  }
                  ${contactType.id === 2 && "bg-indigo-500"}
                  ${contactType.id === 3 && "bg-red-500"}
                   font-semibold gap-2`}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-3" />
                  Contact
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseContact;
