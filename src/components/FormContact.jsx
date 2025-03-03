import React from "react";

const FormContact = () => {
  return (
    <>
      <section className="h-[90vh] bg-[url('/dot-bg.png')] bg-cover bg-center flex justify-center items-center pt-10 shadow-lg pb-10">
        <div className="container flex flex-col justify-center items-center">
          <h3 className="text-orange-400 text-xs font-semibold pb-5">
            LET'S TALK
          </h3>
          <h2 className="text-2xl font-bold pb-14">Contact Us </h2>
          <form className="flex  flex-col  gap-6 w-[60vw]">
            <div className="form-control flex gap-3 w-full">
              <input
                type="text"
                className="focus:border focus:border-indigo-500 p-2 outline-0 placeholder:text-xs border-l border-indigo-500 rounded w-2/4 shadow-lg placeholder:text-gray-500"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="focus:border focus:border-indigo-500 p-2 outline-0 placeholder:text-xs border-l border-indigo-500 rounded w-2/4 shadow-lg placeholder:text-gray-500"
                placeholder="Your Email"
              />
            </div>
            <div className="form-control flex gap-3 w-full">
              <input
                type="text"
                className="focus:border focus:border-indigo-500 p-2 outline-0 placeholder:text-xs border-l border-indigo-500 rounded w-2/4 shadow-lg placeholder:text-gray-500"
                placeholder="Your Phone"
              />
              <input
                type="text"
                className="focus:border focus:border-indigo-500 p-2 outline-0 placeholder:text-xs border-l border-indigo-500 rounded w-2/4 shadow-lg placeholder:text-gray-500"
                placeholder="Your Subject"
              />
            </div>
            <div className="form-control w-full">
              <textarea
                rows="5"
                cols="100"
                placeholder="Your Message"
                className="focus:border focus:border-indigo-500 p-2 outline-0 placeholder:text-xs border-l w-full border-indigo-500 rounded shadow-lg placeholder:text-gray-500"
              ></textarea>
            </div>
            <button className="bg-indigo-500 rounded text-white text-xs font-bold px-5 py-3 w-fit mt-5">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormContact;
