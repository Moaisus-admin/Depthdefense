import React from "react";

import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import SecurituyAssesment from "../../../components/Services/SecurityAssesment";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Application Security Assessment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Application Security Assessment"
      />

      <SecurituyAssesment />

      <Slider />

      <Footer />
    </>
  );
}
