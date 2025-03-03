import React from "react";

const Statistics = () => {
  return (
    <>
      <section className="bg-[url('/banner-bg.jpg')] bg-cover bg-center h-[38vh] bg-fixed relative">
        <div className="absolute w-full h-full top-0 left-0 bg-[#1f1f54] bg-opacity-50 flex justify-center items-center">
          <div className="container">
            <div className="flex justify-center items-center">
              <div className="w-[20%] text-center">
                <h2 className="text-white font-semibold text-3xl mb-3">23 +</h2>
                <span className="text-white font-medium text-sm">
                  Years Helping Business
                </span>
              </div>
              <div className="w-[20%] text-center">
                <h2 className="text-white font-semibold text-3xl mb-3">
                  250 +
                </h2>
                <span className="text-white font-medium text-sm">
                  Working Employees
                </span>
              </div>
              <div className="w-[20%] text-center">
                <h2 className="text-white font-semibold text-3xl mb-3">
                  4500 +
                </h2>
                <span className="text-white font-medium text-sm">
                  Complete Projects
                </span>
              </div>
              <div className="w-[20%] text-center">
                <h2 className="text-white font-semibold text-3xl mb-3">
                  3000 +
                </h2>
                <span className="text-white font-medium text-sm">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
