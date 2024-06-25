import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsCard from "../../../components/Solutions/SolutionsCard";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="SIEM (Security Information and Event Management)"
        homePageUrl="/"
        homePageText="Home"
        activePageText="SIEM (Security Information and Event Management"
      />

      <SolutionsCard />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
