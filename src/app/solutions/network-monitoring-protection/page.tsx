import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";
import SolutionNextgenFirewall from "@/components/Solutions/SolutionNextgenFirewall";
import SolutionsPAM from "@/components/Solutions/SolutionsPAM";
import SolutionsThreat from "@/components/Solutions/SolutionsThreat";
import SolutionsAPT from "@/components/Solutions/SolutionsAPT";
import SolutionsNetWorkM from "@/components/Solutions/NetworkMonitoring";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Network Monitoring & Protection"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Solutions"
      />
      <SolutionsNetWorkM />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
