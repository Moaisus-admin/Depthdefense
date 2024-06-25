import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import EndPointProtection from "../../../components/Solutions/SolutionDetailsContent";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="End Point Protection EDR,XDR,NDR"
        homePageUrl="/"
        homePageText="Home"
        activePageText="End Point Protection EDR,XDR,NDR"
      />

      <EndPointProtection />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
