import React from "react";
import Image from "next/image";

const WhyUs = () => {
  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <div className="container">
          <div className="flex gap-10">
            <div className="w-2/4">
              <div className="trustresponsive">
                <Image src="/choose-1.png" width={500} height={500} />
              </div>
            </div>
            <div className="w-2/4 flex flex-col gap-5">
              <h3 className="text-orange-400 text-xs font-semibold">
                WHY CHOOSE US?
              </h3>
              <h2 className="text-2xl font-bold">
                Safeguard Your Brand with Cyber Security and IT Solutions
              </h2>
              <p className="text-xs text-blue-950 leading-6 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-5 flex-wrap">
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Remote IT Assistance
                </div>
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Managed IT Service
                </div>
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Practice IT Management
                </div>
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Cloud Services
                </div>
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  IT Security Services
                </div>
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Solving IT Problems
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="pb-40 flex justify-center items-center">
        <div className="container">
          <div className="flex gap-10">
            <div className="w-2/4 flex flex-col gap-5">
              <h3 className="text-orange-400 text-xs font-semibold">
                WHY TRUST US?
              </h3>
              <h2 className="text-2xl font-bold">
                Achieve Digital Transformation For Your Retail Business Services
              </h2>
              <p className="text-xs text-blue-950 leading-6 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-5 flex-wrap">
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Protect your Business
                </div>
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Data Security
                </div>
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Running your Business
                </div>
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Network Security
                </div>
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Small Business Owners
                </div>
                <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                  Network Monitoring
                </div>
              </div>
            </div>
            <div className="w-2/4">
              <div className="trustresponsive">
                <Image src="/choose-2.png" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
