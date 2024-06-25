import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import SecurityServices from "../../../components/Services/SecurityServices";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Managed Security Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Managed Security Services"
      />

      <SecurityServices />

      <Slider />

      <Footer />
    </>
  );
}
