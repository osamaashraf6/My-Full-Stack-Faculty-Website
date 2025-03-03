// import React from "react";

// const Projects = () => {
//   return <div>Projects</div>;
// };

// export default Projects;

"use client";
import React, { useEffect, useState } from "react";
import { data } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";

const Projects = ({ params }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const updated = data.filter((item) => item.category === params.category);
    setCategories(updated);
  }, [params.category]);
  return (
    <>
      <section className="pt-48">
        <div className="container">
          <h1 className="text-5xl font-bold mb-5 text-orange-500">Our Works</h1>
          {categories.map((item) => (
            <div key={item.id}>
              <h3 className="font-bold text-lg text-emerald-500 mb-12 capitalize">
                {item.category} Projects
              </h3>
              {item.content.map((subitem) => (
                <div
                  key={subitem.id}
                  className="flex items-center even:flex-row-reverse mb-16 gap-5"
                >
                  <div className="w-6/12">
                    <div className="category-responsive">
                      <Image
                        src={subitem.image}
                        alt="categoryImg"
                        width={450}
                        height={30}
                        className="h-64"
                      />
                    </div>
                  </div>
                  <div className="w-6/12 flex flex-col gap-3">
                    <h2 className="font-bold text-2xl text-gray-400">
                      {subitem.title}
                    </h2>
                    <p className="text-sm text-gray-500 text-justify pr-8">
                      {subitem.desc}
                    </p>
                    <Link
                      href={`/projects/${params.category}/${subitem.id}?search=subcat`}
                      className="block rounded-md bg-emerald-600 w-fit px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
