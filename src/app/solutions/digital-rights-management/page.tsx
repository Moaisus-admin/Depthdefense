import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsDigitalRights from "../../../components/Solutions/DigitalRights";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Digital Rights Management"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Digital Rights Management"
      />
      <SolutionsDigitalRights />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
