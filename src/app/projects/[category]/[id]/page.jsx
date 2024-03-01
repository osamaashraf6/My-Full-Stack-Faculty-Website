"use client";
import React, { useEffect, useState } from "react";
import { data } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = ({ params }) => {
  const [subCategory, setSubCategory] = useState([]);
  useEffect(() => {
    const updated = data.filter((item) => item.category === params.category);
    const subUpdated = updated[0].content.filter(
      (item) => item.id == params.id
    );
    setSubCategory(subUpdated);
  }, [params.id]);
  return (
    <>
      <section className="py-16 pt-44 ">
        <div className="container">
          {subCategory.map((item) => (
            <div key={item.id} className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-orange-400">
                @ {item.title} App
              </h1>
              <h2 className="font-bold text-gray-400">
                Supporters For This Project?
              </h2>
              <ul className="text-sm text-gray-500 font-bold">
                <li>- {item.list.list1}</li>
                <li>- {item.list.list2}</li>
                <li>- {item.list.list3}</li>
              </ul>
              <div className="flex gap-5 ">
                <div className="w-6/12 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-400 mb-5">
                    What Are The Tech Stack?
                  </h3>
                  <ul className="text-sm text-orange-500 font-bold list-decimal pl-5">
                    <li>{item.lang.lang1}</li>
                    <li>{item.lang.lang2}</li>
                    <li>{item.lang.lang3}</li>
                    <li>{item.lang.lang4}</li>
                  </ul>
                </div>
                <div className="w-6/12">
                  <div className="subcategory-responsive">
                    <Image
                      src={item.image}
                      alt="subcategoryImg"
                      width={450}
                      height={30}
                      className="h-64"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-gray-300 font-bold">
                What This Project About?
              </h3>
              <p className="text-gray-500 text-sm text-justify pr-5">
                {item.desc}
              </p>
              <div className="flex gap-5">
                <Link
                  href={item.source}
                  className="block rounded-md bg-emerald-600  px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  See Source <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                  href={item.live}
                  className="block rounded-md bg-emerald-600  px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  See Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
