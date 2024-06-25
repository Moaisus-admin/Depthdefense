import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import ISO from "../../../components/Services/ISO27001";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="ISO 27001"
        homePageUrl="/"
        homePageText="Home"
        activePageText="ISO 27001"
      />

      <ISO />

      <Slider />

      <Footer />
    </>
  );
}
