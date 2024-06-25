import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import VCISO from "../../../components/Services/vCISO";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="vCISO"
        homePageUrl="/"
        homePageText="Home"
        activePageText="vCISO"
      />

      <VCISO />

      <Slider />

      <Footer />
    </>
  );
}
