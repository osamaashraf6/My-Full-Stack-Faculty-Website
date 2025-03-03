import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCategory = () => {
  return (
    <>
      <section className="py-32">
        <div className="container">
          <h1 className="text-5xl font-bold mb-5 text-orange-500">Our Works</h1>
          <h2 className="mb-2 font-bold text-gray-400">Choose a gallery</h2>
          <div className="flex gap-6">
            <div className="border-2 border-gray-100">
              <Link href="/projects/plc?search=cat" className="relative">
                <Image
                  src="https://github.com/safak/nextjs-tutorial/blob/main/public/illustration.png?raw=true"
                  alt="illustrationsImg"
                  width={155}
                  height={100}
                  className="h-56"
                />
                <span className="absolute bottom-1 right-2 font-bold text-xl text-orange-500">
                  PLC
                </span>
              </Link>
            </div>
            <div className="border-2 border-gray-100 ">
              <Link href="/projects/software?search=cat" className="relative">
                <Image
                  src="https://github.com/safak/nextjs-tutorial/blob/main/public/websites.jpg?raw=true"
                  alt="websitesImg"
                  width={155}
                  height={150}
                  className="h-56 grayscale"
                />
                <span className="absolute bottom-1 right-2 font-bold text-xl text-orange-500">
                  Software
                </span>
              </Link>
            </div>
            <div className="border-2 border-gray-100">
              <Link
                href="/projects/microcontrollers?search=cat"
                className="relative"
              >
                <Image
                  src="https://github.com/safak/nextjs-tutorial/blob/main/public/apps.jpg?raw=true"
                  alt="applicationsImg"
                  width={155}
                  height={100}
                  className="h-56 grayscale"
                />
                <span className="absolute bottom-1 right-2 font-bold text-xl text-orange-500 pl-2">
                  Micro Controllers
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCategory;
