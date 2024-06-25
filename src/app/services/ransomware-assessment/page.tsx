import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import Ransomware from "../../../components/Services/Ransomware";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Ransomware Assessment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Ransomware Assessment"
      />

      <Ransomware />

      <Slider />

      <Footer />
    </>
  );
}
