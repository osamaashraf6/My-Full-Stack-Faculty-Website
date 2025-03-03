import {
  faQuoteLeft,
  faShare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const DistinguishedStudents = () => {
  return (
    <>
      <section className="pt-[150px] pb-16 shadow-md">
        <div className="container">
          <div className="items flex flex-col gap-12">
            <div className="item flex flex-col justify-center items-center gap-2">
              <h1 className="text-3xl text-orange-600 font-bold">
                What Bosnai Customers Say
              </h1>
              <p className="text-sm text-orange-400 text-center w-[30%] mb-6">
                lorem lorem lorem loremloremlorem lorem lorem lorem lorem lorem
                lorem lorem lorem loremlorem
              </p>

              <div className="flex gap-5 mb-10">
                <div className="flex items-center gap-5 border-r pr-6">
                  <FontAwesomeIcon
                    icon={faShare}
                    className="text-2xl text-orange-400"
                  />
                  <div>
                    <div className="stars flex gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-4 text-yellow-400"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-4 text-yellow-400"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-4 text-yellow-400"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-4 text-yellow-400"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-4 text-yellow-400"
                      />
                    </div>
                    <span className="text-xs text-indigo-400 font-semibold">
                      Hello ECE from world
                    </span>
                  </div>
                </div>
                {/*  */}
                <div className="flex items-center gap-5 border-r pr-6">
                  <FontAwesomeIcon
                    icon={faShare}
                    className="text-2xl text-orange-400"
                  />
                  <div>
                    <span className="text-xs text-indigo-400 font-semibold">
                      Hello ECE from world
                    </span>

                    <div className="stars flex  gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-4 text-yellow-400"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-4 text-yellow-400"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-4 text-yellow-400"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-4 text-yellow-400"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-4 text-yellow-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-indigo-500 rounded-full text-white px-3 py-2 text-sm delay transition ease-in-out hover:bg-indigo-400">
                See details
              </button>
            </div>
            <div className="item">
              <video
                width="100%"
                height="100%"
                poster="/video-poster.png"
                controls
                className="cursor-pointer rounded-lg"
              >
                <source src="/asd.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="py-16 shadow-md">
        <div className="container flex justify-center items-center">
          <div className="items flex items-center gap-10">
            <div className=" w-[55%]">
              <h2 className="font-bold text-2xl text-indigo-400 mb-2  w-[60%]">
                Case Studies From Carta Customers
              </h2>
              <p className="text-xs font-medium text-orange-400">
                lorem lorem lorem lorem lorem loremloremlorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem
              </p>
            </div>
            <div className="par w-[45%] flex gap-4">
              <div className="left flex flex-col gap-3 mt-4">
                <div className="bg-red-500 rounded-lg w-[150px] h-[130px] flex justify-center items-center text-white">
                  Calendy
                </div>
                <div className="bg-indigo-500 rounded-lg w-[150px] h-[130px] flex justify-center items-center text-white">
                  Calendy
                </div>
              </div>
              <div className="right flex flex-col gap-3">
                <div className="bg-orange-500 rounded-lg w-[150px] h-[130px] flex justify-center items-center text-white">
                  Calendy
                </div>
                <div className="bg-green-400 rounded-lg w-[150px] h-[130px] flex justify-center items-center text-white">
                  Calendy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="py-16 ">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-orange-400 font-bold">Our Students</h2>
          </div>
          <div className="items flex justify-center items-center">
            <swiper-container
              class="mySwiper h-[60vh] w-[80%]"
              pagination="true"
              pagination-clickable="true"
              navigation="true"
              space-between="30"
              centered-slides="true"
              autoplay-delay="2500"
              autoplay-disable-on-interaction="false"
            >
              <swiper-slide>
                <div className="flex flex-col gap-4 justify-center items-center ">
                  <div className="w-[120px] h-[120px] rounded-full border-[4px] border-indigo-500">
                    <Image
                      src="/team-4.jpg"
                      alt="Img"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />{" "}
                  </div>
                  <p className=" px-32  text-sm text-orange-400 leading-6 ">
                    A curated selection of the best 40 testimonial pages created
                    by top-class SaaS companies. These designs exhibit a vast
                    variety of customer testimonials/experiences, and they are
                    great to convince sceptical users to buy.
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-3xl text-blue-400"
                    />
                  </div>
                  <h3 className="text-indigo-500 text-2xl font-semibold">
                    Osama Ashraf
                  </h3>
                  <span className="text-orange-500 text-xs">
                    Full Stack Web Developer
                  </span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="flex flex-col gap-4 justify-center items-center  ">
                  <div className="w-[120px] h-[120px] rounded-full border-[4px] border-indigo-500">
                    <Image
                      src="/team-2.jpg"
                      alt="Img"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />{" "}
                  </div>
                  <p className=" px-32  text-sm text-orange-400 leading-6 ">
                    A curated selection of the best 40 testimonial pages created
                    by top-class SaaS companies. These designs exhibit a vast
                    variety of customer testimonials/experiences, and they are
                    great to convince sceptical users to buy.
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-3xl text-blue-400"
                    />
                  </div>
                  <h3 className="text-indigo-500 text-2xl font-semibold">
                    Osama Ashraf
                  </h3>
                  <span className="text-orange-500 text-xs">
                    Full Stack Web Developer
                  </span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="flex flex-col gap-4 justify-center items-center  ">
                  <div className="w-[120px] h-[120px] rounded-full border-[4px] border-indigo-500">
                    <Image
                      src="/team-3.jpg"
                      alt="Img"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />{" "}
                  </div>
                  <p className=" px-32  text-sm text-orange-400 leading-6">
                    A curated selection of the best 40 testimonial pages created
                    by top-class SaaS companies. These designs exhibit a vast
                    variety of customer testimonials/experiences, and they are
                    great to convince sceptical users to buy.
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-3xl text-blue-400"
                    />
                  </div>
                  <h3 className="text-indigo-500 text-2xl font-semibold">
                    Osama Ashraf
                  </h3>
                  <span className="text-orange-500 text-xs">
                    Full Stack Web Developer
                  </span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="flex flex-col gap-4 justify-center items-center  ">
                  <div className="w-[120px] h-[120px] rounded-full border-[4px] border-indigo-500">
                    <Image
                      src="/team-4.jpg"
                      alt="Img"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />{" "}
                  </div>
                  <p className=" px-32  text-sm text-orange-400 leading-6  ">
                    A curated selection of the best 40 testimonial pages created
                    by top-class SaaS companies. These designs exhibit a vast
                    variety of customer testimonials/experiences, and they are
                    great to convince sceptical users to buy.
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-3xl text-blue-400"
                    />
                  </div>
                  <h3 className="text-indigo-500 text-2xl font-semibold">
                    Osama Ashraf
                  </h3>
                  <span className="text-orange-500 text-xs">
                    Full Stack Web Developer
                  </span>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </section>
    </>
  );
};

export default DistinguishedStudents;
