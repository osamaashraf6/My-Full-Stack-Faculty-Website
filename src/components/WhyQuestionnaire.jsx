import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyQuestionnaire = () => {
  return (
    <section className="h-[90vh] flex justify-center items-center pb-10">
      <div className="container">
        <div className="flex gap-10 items-center mb-10">
          <div className="w-2/4">
            <div className="trustresponsive">
              <Image src="/questionnaire.jpg" width={500} height={500} />
            </div>
          </div>
          <div className="w-2/4 flex flex-col gap-5">
            <h3 className="text-orange-400 text-xs font-semibold">
              WHY QUESTIONNAIRE?
            </h3>
            <h2 className="text-2xl font-bold">
              Questionnaires are essential tools for making informed decisions
            </h2>
            <p className="text-xs text-blue-950 leading-6 mb-2">
              Questionnaires are valuable tools used in various fields such as
              research, marketing, education, healthcare, and social sciences
              for gathering structured data from individuals
            </p>
            <div className="flex gap-5 flex-wrap">
              <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                Data Collection
              </div>
              <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                Standardization
              </div>
              <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                Anonymity and Confidentiality
              </div>
              <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                Analysis and Interpretation
              </div>
              <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                Feedback and Evaluation
              </div>
              <div className="bg-white rounded border-l border-indigo-500 shadow-lg p-2 w-[45%] text-[13px]">
                Scalability & Flexibility
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center text-xs font-bold text-orange-500">
          Please, click{" "}
          <Link href="" className="text-indigo-500 text-lg">
            Here{" "}
          </Link>
          to answer the questionnaire
        </div>
      </div>
    </section>
  );
};

export default WhyQuestionnaire;
