"use client";
import React from "react";
import Landing from "@/components/Landing";
import WhyUs from "@/components/WhyUs";
import Statistics from "@/components/Statistics";
import Testimonial from "@/components/Testimonial";
import Profs from "@/components/Profs";
import Together from "@/components/Together";
import Supporters from "@/components/Supporters";
const Home = () => {
  return (
    <>
      <main>
        <Landing />
        <WhyUs />
        <Statistics />
        <Testimonial />
        <Profs />
        <Together />
        <Supporters />
      </main>
    </>
  );
};

export default Home;
