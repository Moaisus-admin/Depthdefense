import React from "react";

import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import Governance from "../../../components/Services/Governance";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Malware Analysis"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Malware Analysis"
      />

      <Governance />

      <Slider />

      <Footer />
    </>
  );
}
