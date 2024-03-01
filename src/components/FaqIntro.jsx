import Image from "next/image";
import React from "react";

const FaqIntro = () => {
  return (
    <>
      <section className="h-[80vh] pt-16 flex justify-center items-center bg-gradient-to-b from-blue-500 to-gray-100">
        <div className="container">
          <div className="items flex gap-20 items-center">
            <div className="item w-2/4 flex flex-col gap-4">
              <h1 className="text-orange-500 text-2xl font-bold">FAQ</h1>
              <h2 className="text-indigo-600 text-sm font-semibold">
                Do You Have Questions?
              </h2>
              <p className="text-sm drop-shadow-2xl leading-6 text-orange-500">
                Here you will find the answers most valued by our patterns,
                along with access to step-by-step instructions and support.
              </p>
            </div>
            <div className="item w-2/4">
              <div className="faqresponsive ">
                <Image
                  src="/faq.avif"
                  width={400}
                  height={300}
                  className="rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqIntro;
