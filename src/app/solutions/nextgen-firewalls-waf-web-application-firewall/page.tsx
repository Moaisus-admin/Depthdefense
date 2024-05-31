import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";
import SolutionNextgenFirewall from "@/components/Solutions/SolutionNextgenFirewall";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Next Gen Firewall & WAF"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Solutions"
      />
      <SolutionNextgenFirewall />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
