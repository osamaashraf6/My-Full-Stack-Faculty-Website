import Link from "next/link";
import React from "react";

const Together = () => {
  return (
    <>
      <section className="h-[45vh] bg-[url('/banner-bg.jpg')] bg-cover bg-center relative">
        <div className="wrapper absolute top-0 left-0 w-full h-full  bg-[#1f1f54] bg-opacity-60 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4 w-[45%]">
            <h3 className="text-orange-400 text-sm font-semibold">
              Want to work with us?
            </h3>
            <h2 className="text-2xl font-bold text-white">
              Digitally Transform & Grow Your Business
            </h2>
            <p className="text-white text-xs leading-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud consectetur voluptatem
              accusantium doloremque adipiscing elit.
            </p>
            <div className="flex gap-3">
              <Link
                href=""
                className=" bg-indigo-500 text-white py-2.5 px-5 rounded text-sm"
              >
                Call Now
              </Link>
              <Link
                href=""
                className="bg-white text-indigo-500 py-2.5 px-5 rounded text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Together;
