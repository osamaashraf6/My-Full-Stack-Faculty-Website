import CardsAbout from "@/components/CardsAbout";
import LandingAbout from "@/components/LandingAbout";
import ProgressAbout from "@/components/ProgressAbout";
import React from "react";

const About = () => {
  return (
    <>
      <main>
        <LandingAbout />
        <CardsAbout />
        <ProgressAbout />
      </main>
    </>
  );
};

export default About;
