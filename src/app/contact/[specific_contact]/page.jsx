"use client";
import { chooseList } from "@/utils/data";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const SpecificContact = ({ params }) => {
  const [specificPerson, setSpecificPerson] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { specific_contact } = params;
  useEffect(() => {
    const updated = chooseList.filter((item) => item.id == specific_contact);
    setSpecificPerson(updated);
  }, [specific_contact]);
  // const personEmailContact = () => {
  //   const updated = specificPerson.map((item) => item.email);
  //   // console.log(updated);
  //   return updated;
  // };
  const handleChange = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
  };

  //
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "strawberry", label: "Strawberry" },
    { value: "strawberry", label: "Strawberry" },
    { value: "strawberry", label: "Strawberry" },
    { value: "Vanilla", label: "Vanilla" },
    { value: "strawberry", label: "Strawberry" },
    { value: "strawberry", label: "Strawberry" },
    { value: "Vanilla", label: "Vanilla" },
    { value: "Vanilla", label: "Vanilla" },
    { value: "Vanilla", label: "Vanilla" },
    { value: "Vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <section className="h-[105vh] bg-[url('/dot-bg.png')] bg-cover bg-center flex justify-center items-center pt-48 shadow-lg pb-10">
        {specificPerson.map((item) => (
          <div
            className="container flex flex-col justify-center items-center"
            key={item.id}
          >
            <h3 className="text-orange-400 text-xs font-semibold pb-5">
              Hi Again Let's Talk With :
            </h3>
            <div className="flex relative">
              <h2 className="text-2xl font-bold pb-14">
                {item.id !== 3 && <span>The</span>} {item.title} Of The ECE
                Department
              </h2>
              {item.id === 3 && (
                <div className="w-54 absolute right-[-128%] flex flex-col justify-center items-center">
                  <span className="text-orange-500 font-bold mb-2 drop-shadow">
                    Choose Student to Contact
                  </span>
                  <Select
                    options={options}
                    onChange={handleChange}
                    className="w-48"
                  />
                </div>
              )}
            </div>
            <form className="flex flex-col  gap-6 w-[60vw]">
              <div className="form-control flex gap-3 w-full">
                <input
                  type="text"
                  className="focus:border focus:border-indigo-500 p-2 outline-0 placeholder:text-xs border-l border-indigo-500 rounded w-2/4 shadow-lg placeholder:text-gray-500"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
                <input
                  type="email"
                  className="focus:border focus:border-indigo-500 p-2 outline-0 placeholder:text-xs border-l border-indigo-500 rounded w-2/4 shadow-lg placeholder:text-gray-500"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
              </div>
              <div className="form-control flex gap-3 w-full">
                <input
                  type="text"
                  className="focus:border focus:border-indigo-500 p-2 outline-0 placeholder:text-xs border-l border-indigo-500 rounded w-2/4 shadow-lg placeholder:text-gray-500"
                  placeholder="Your Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                />
                <input
                  type="text"
                  className="focus:border focus:border-indigo-500 p-2 outline-0 placeholder:text-xs border-l border-indigo-500 rounded w-2/4 shadow-lg placeholder:text-gray-500"
                  placeholder="Your Subject"
                  onChange={(e) => setSubject(e.target.value)}
                  name="subject"
                />
              </div>
              <div className="form-control w-full">
                <textarea
                  rows="5"
                  cols="100"
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  className="focus:border focus:border-indigo-500 p-2 outline-0 placeholder:text-xs border-l w-full border-indigo-500 rounded shadow-lg placeholder:text-gray-500"
                ></textarea>
              </div>
              <button className="bg-indigo-500 rounded text-white text-xs font-bold px-5 py-3 w-fit mt-5">
                Send Message
              </button>
            </form>
          </div>
        ))}
      </section>
    </>
  );
};

export default SpecificContact;
