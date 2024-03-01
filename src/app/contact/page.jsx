import ChooseContact from "@/components/ChooseContact";
import FormContact from "@/components/FormContact";
import InfoContact from "@/components/InfoContact";
import LandingContact from "@/components/LandingContact";
import Location from "@/components/Location";
import React from "react";

const Contact = () => {
  return (
    <>
      <LandingContact />
      <FormContact />
      <ChooseContact />
      <InfoContact />
      <Location />
    </>
  );
};

export default Contact;
