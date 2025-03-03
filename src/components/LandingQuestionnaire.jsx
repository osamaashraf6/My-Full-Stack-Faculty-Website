import Link from "next/link";
import React from "react";

const LandingQuestionnaire = () => {
  return (
    <>
      <section className="relative h-[50vh] bg-[url('/page-title-bg.jpg')] bg-cover bg-center">
        <div className="w-full h-full top-0 left-0 absolute  bg-[#101a3a] bg-opacity-45 flex flex-col gap-5 justify-center items-center">
          <h1 className="text-white text-2xl font-bold">Questionnaire</h1>
          <p className="text-white text-xs flex items-center font-semibold gap-2">
            <Link
              href="/"
              className="hover:text-indigo-500 transition ease-in-out"
            >
              Home
            </Link>
            <span className="block bg-white w-1.5 h-1.5 rounded-full"></span>
            Questionnaire
          </p>
        </div>
      </section>
    </>
  );
};

export default LandingQuestionnaire;
