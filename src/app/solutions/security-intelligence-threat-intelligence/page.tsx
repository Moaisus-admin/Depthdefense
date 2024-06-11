import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";
import SolutionsThreat from "@/components/Solutions/SolutionsThreat";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Threat Intelligence"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Threat Intelligence"
      />
      <SolutionsThreat />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
