import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import RiskAssesment from "../../../components/Services/RiskAssesment";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Risk Assessment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Risk Assessment"
      />

      <RiskAssesment />

      <Slider />

      <Footer />
    </>
  );
}
