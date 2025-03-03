"use client";
import { postList } from "@/utils/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Post = ({ params }) => {
  const [data, setData] = useState([]);
  const { id } = params;

  useEffect(() => {
    const updated = postList.filter((item) => item.id == id);
    setData(updated);
  }, [id]);
  console.log(data);
  return (
    <>
      <section className="pt-[150px] pb-16">
        <div className="container">
          {data.map((post) => (
            <div className="flex flex-col gap-8" key={post.id}>
              <div className="items-center flex gap-10">
                <div className="flex flex-col gap-6 grow w-14 shadow p-[14px] rounded-lg h-[31.5vh]">
                  <h1 className="text-3xl font-bold text-indigo-400 capitalize">
                    {post.title}
                  </h1>
                  <p className="text-sm text-gray-400">{post.shortDesc}</p>
                  <div className="flex items-center gap-2">
                    <div className="">
                      <Image
                        src={post.img}
                        alt="userImg"
                        width={30}
                        height={30}
                        className="rounded-full "
                      />
                    </div>
                    <div className="flex gap-24">
                      <span className="text-sm text-orange-400 font-bold capitalize">
                        {post.author}
                      </span>
                     
                    </div>
                  </div>
                </div>
                <div className="grow w-14 h-[31.5vh]">
                  <div className="post-responsive">
                    <Image
                      src={post.img}
                      alt="postImg"
                      width={485}
                      height={30}
                      className="h-56 shadow-lg rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="shadow p-4 rounded-lg">
                <p className="text-sm text-gray-500 text-justify mb-4">
                  {post.desc}
                </p>
                <h2 className="font-bold text-indigo-400 mb-4 capitalize">
                  Important information about it!
                </h2>
                <p className="text-sm text-gray-500 text-justify">
                  {post.desc}
                </p>
              </div>
              <div />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Post;
