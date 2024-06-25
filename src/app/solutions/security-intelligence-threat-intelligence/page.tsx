import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsThreat from "../../../components/Solutions/SolutionsThreat";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Threat Intelligence"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Threat Intelligence"
      />
      <SolutionsThreat />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
