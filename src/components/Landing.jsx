import React from "react";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const Landing = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-purple-900 to-blue-400 h-screen flex justify-center items-center">
        <div className="container z-10">
          <div className="items flex items-center pt-20">
            <div className="w-2/4 flex flex-col gap-6">
              <div className="flex gap-3">
                <span className="flex justify-center items-center hover:bg-indigo-500 transition ease-in-out delay-150 cursor-pointer border border-gray-100 rounded-lg text-white  p-2">
                  <FontAwesomeIcon icon={faFacebook} className="w-4" />
                </span>
                <span className="flex justify-center items-center hover:bg-indigo-500 transition ease-in-out delay-150 cursor-pointer border border-gray-100 rounded-lg text-white  p-2">
                  <FontAwesomeIcon icon={faXTwitter} className="w-4" />
                </span>
                <span className="flex justify-center items-center hover:bg-indigo-500 transition ease-in-out delay-150 cursor-pointer border border-gray-100 rounded-lg text-white  p-2">
                  <FontAwesomeIcon icon={faInstagram} className="w-4" />
                </span>
                <span className="flex justify-center items-center hover:bg-indigo-500 transition ease-in-out delay-150 cursor-pointer border border-gray-100 rounded-lg text-white  p-2">
                  <FontAwesomeIcon icon={faYoutube} className="w-4" />
                </span>
              </div>
              <h1 className="text-5xl leading-snug font-bold text-white pr-5">
                IT Solutions & <br />
                Business Services Company
              </h1>
              <p className="text-xs leading-6 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor magna aliqua, magna aliqua. ipsum is simply dummy
                text of the printing.
              </p>
              <div className="flex gap-3">
                <button className="bg-white text-indigo-500 text-sm p-2 rounded">
                  Our Service
                </button>
                <button className="bg-indigo-600 text-white text-sm p-2 rounded">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="w-2/4">
              <div className="landingresponsive">
                <Image src="/home-font.png" width={500} height={400} />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className=" absolute left-0 bottom-[-5%] z-0">
          <Image
            src="/home-bottom-shape.png"
            width={500}
            height={500}
            className="w-[100vw]"
          />
        </div>
      </section>
    </>
  );
};

export default Landing;
