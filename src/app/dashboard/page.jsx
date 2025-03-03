"use client";
import { postList } from "@/utils/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(postList);
  }, []);
  return (
    <>
      <section className="contact pt-[160px] pb-16">
        <div className="container">
          <div className="flex gap-10">
            <div class="w-1/2">
              <h2 className="mb-10 text-xl font-bold text-gray-400">
                Recent Posts
              </h2>
              <div className="flex flex-col gap-10  ">
                {data.length == 0 && (
                  <span className="text-yellow-500 shadow-2xl text-center text-sm font-semibold ">
                    No Available Posts for you Add now 😊
                  </span>
                )}
                {data.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between shadow rounded gap-5 h-[22vh] p-3"
                  >
                    <div className=" w-[25%]">
                      <div className="posts-responsive h-[128px]">
                        <Image
                          src={item.img}
                          alt="postsImg"
                          width={150}
                          height={150}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3  w-[75%] relative">
                      <h2 className="text-xl font-semibold  text-orange-400  capitalize">
                        {item.title}
                      </h2>
                      <p className=" text-sm text-gray-400">{item.shortDesc}</p>
                      <button className="text-red-400 absolute top-0 right-0">
                        &times;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="mb-10 text-xl font-bold text-gray-400">
                Add New Post
              </h2>
              <form className="flex flex-col gap-3">
                <div className="">
                  <input
                    type="text"
                    className="bg-transparent p-1 rounded border-2 w-full border-gray-300 placeholder:text-sm placeholder:font-bold"
                    placeholder="Title"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="bg-transparent p-1 rounded border-2 w-full border-gray-300 placeholder:text-sm placeholder:font-bold"
                    placeholder="Short Description"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="bg-transparent p-1 rounded border-2 w-full border-gray-300 placeholder:text-sm placeholder:font-bold"
                    placeholder="Image"
                  />
                </div>
                <div className=""></div>
                <button className="block rounded-md bg-orange-400 w-full px-12 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
