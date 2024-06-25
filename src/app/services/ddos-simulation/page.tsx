import React from "react";

import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import DDOS from "../../../components/Services/DDOS";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="DDoS Simulation"
        homePageUrl="/"
        homePageText="Home"
        activePageText="DDoS Simulation"
      />

      <DDOS />

      <Slider />

      <Footer />
    </>
  );
}
