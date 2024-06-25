import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionNextgenFirewall from "../../../components/Solutions/SolutionNextgenFirewall";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Next Gen Firewall & WAF"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Next Gen Firewall & WAF"
      />
      <SolutionNextgenFirewall />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
