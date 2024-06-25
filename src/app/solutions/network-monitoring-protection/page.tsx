import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsNetWorkM from "../../../components/Solutions/NetworkMonitoring";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Network Monitoring & Protection"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Network Monitoring & Protection"
      />
      <SolutionsNetWorkM />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
