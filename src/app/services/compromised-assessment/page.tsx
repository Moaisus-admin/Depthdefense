import React from "react";

import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import CompromiseAssesment from "../../../components/Services/CompromiseAssesment";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Compromise Assessment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Compromise Assessment"
      />

      <CompromiseAssesment />

      <Slider />

      <Footer />
    </>
  );
}
