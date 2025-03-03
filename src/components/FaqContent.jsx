"use client";
import { faqList } from "@/utils/data";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const FaqContent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  //   const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState([]);
  const filterBtns = (category) => {
    const updated = faqList.filter((item) => item.category === category);
    setFaq(updated);
  };

  const accord = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(index);
  };
  useEffect(() => {
    filterBtns("about");
  }, []);
  return (
    <>
      <section className="h-[70vh] flex py-20">
        <div className="container">
          <div className="items flex h-full">
            <div className="item w-[40%] border-l border-indigo-500 p-5 h-full">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => filterBtns("about")}
                  className="text-indigo-500 text-sm text-left drop-shadow-md w-fit pr-5"
                >
                  About Us
                </button>
                <button
                  onClick={() => filterBtns("register")}
                  className="text-indigo-500 text-sm text-left drop-shadow-md w-fit pr-5"
                >
                  Register
                </button>
                <button
                  onClick={() => filterBtns("fees")}
                  className="text-indigo-500 text-sm text-left drop-shadow-md w-fit pr-5"
                >
                  Fees
                </button>
                <button
                  onClick={() => filterBtns("schedule")}
                  className="text-indigo-500 text-sm text-left drop-shadow-md w-fit pr-5"
                >
                  Schedule
                </button>
                <button
                  onClick={() => filterBtns("time")}
                  className="text-indigo-500 text-sm text-left drop-shadow-md w-fit pr-5"
                >
                  Time
                </button>
              </div>
            </div>
            <div className="item w-[60%] relative">
              <div className="accordion h-[300px] shadow-md max-h-[350px] overflow-auto">
                {faq.map((item, index) => (
                  <div
                    className="flex flex-col items-start  px-2 "
                    key={item.id}
                  >
                    {index === 0 && (
                      <h2 className="text-indigo-400 text-sm font-semibold border-b-2 px-2 border-orange-500 pb-5 absolute top-[-13%] w-full left-0">
                        {item.heading}
                      </h2>
                    )}
                    <button
                      onClick={() => {
                        accord(index);
                      }}
                      className="flex justify-between border-b py-5 w-full border-indigo-500 text-left"
                    >
                      <span className="text-orange-400">{item.title}</span>
                      <span>
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="text-orange-400"
                        />
                      </span>
                    </button>
                    {openIndex === index && (
                      <div
                        className={`panel bg-gray-50 w-full p-2 text-indigo-500 text-sm leading-6 `}
                      >
                        {item.desc}
                      </div>
                    )}
                  </div>
                ))}
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqContent;
