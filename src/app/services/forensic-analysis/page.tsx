import React from "react";

import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import ForensicAnalysis from "../../../components/Services/ForensicAnalysis";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Forensic Analysis"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Forensic Analysis"
      />

      <ForensicAnalysis />

      <Slider />

      <Footer />
    </>
  );
}
