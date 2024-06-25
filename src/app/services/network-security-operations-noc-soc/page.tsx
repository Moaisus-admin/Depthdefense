import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import NetworkSecurity from "../../../components/Services/NetworkSecurity";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Network & Security Operations"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Network & Security Operations"
      />

      <NetworkSecurity />

      <Slider />

      <Footer />
    </>
  );
}
