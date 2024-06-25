import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsPAM from "../../../components/Solutions/SolutionsPAM";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Privilege Access Management"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privilege Access Management"
      />
      <SolutionsPAM />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
