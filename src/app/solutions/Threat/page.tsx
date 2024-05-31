import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";
import SolutionNextgenFirewall from "@/components/Solutions/SolutionNextgenFirewall";
import SolutionsPAM from "@/components/Solutions/SolutionsPAM";
import SolutionsThreat from "@/components/Solutions/SolutionsThreat";

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
      <SolutionsThreat />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
