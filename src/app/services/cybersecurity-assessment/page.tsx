import React from "react";

import PageBanner from "../../../components/Common/PageBanner";
import ServicesDetailsContent from "../../../components/Services/ServicesDetailsContent";
import Footer from "../../../components/Layouts/Footer";

import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Cybersecurity Assessment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cybersecurity Assessment"
      />

      <ServicesDetailsContent />

      <Slider />

      <Footer />
    </>
  );
}
