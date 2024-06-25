import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsNAC from "../../../components/Solutions/SolutionsNAC";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Network Access Control"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Network Access Control"
      />
      <SolutionsNAC />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
