"use client";
import { postList } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(postList);
  }, []);
  return (
    <>
      <section className="pt-[160px] pb-24">
        <div className="container flex flex-col gap-10">
          {data.map((post) => (
            <div className="flex items-center gap-1 shadow rounded-lg">
              <div className=" w-1/4">
                <div className="posts-responsive">
                  <Image
                    src={post.img}
                    alt="postsImg"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3  w-3/4">
                <h2 className="text-2xl font-semibold w-3/4 text-indigo-400 capitalize">
                  {post.title}
                </h2>
                <p className="pr-8 text-sm text-gray-400 mb-4">{post.desc}</p>
                <Link
                  href={`/posts/${post.id}`}
                  class="max-sm:absolute max-sm:bottom-0 max-sm:right-0 bg-orange-500 rounded px-4 py-2 max-sm:py-1 max-sm:px-3 font-medium text-white w-[117px] hover:bg-orange-600 shadow-lg transition delay ease-in-out"
                >
                  See details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Posts;
