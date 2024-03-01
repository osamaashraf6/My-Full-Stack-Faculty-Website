"use client";
import { supportersList } from "@/utils/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Supporters = () => {
  const [supporters, setSupporters] = useState([]);
  useEffect(() => {
    setSupporters(supportersList);
  }, []);
  return (
    <>
      <section className=" h-[70vh] py-30 text-center flex justify-center items-center">
        <div className="container flex flex-col gap-3">
          <h3 className="text-orange-400 text-xs font-semibold">
            Trusted By Over 1500
          </h3>
          <h2 className="text-2xl font-bold mb-10">Our Customers</h2>
          <div className="items flex flex-wrap gap-5 justify-center items-center">
            {supporters.map((supporter) => (
              <div
                className="item w-[18%] border border-gray-200 p-5 rounded-lg"
                key={supporter.id}
              >
                <div className="supporterresponsive">
                  <Image src={supporter.img} width={100} height={100} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Supporters;
