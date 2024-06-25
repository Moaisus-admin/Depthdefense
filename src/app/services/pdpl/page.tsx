import React from "react";

import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import PDPL from "../../../components/Services/PDPL";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="PDPL"
        homePageUrl="/"
        homePageText="Home"
        activePageText="PDPL"
      />

      <PDPL />

      <Slider />

      <Footer />
    </>
  );
}
