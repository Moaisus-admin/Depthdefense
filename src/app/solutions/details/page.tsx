import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import SolutionDetailsContent from "../../../components/Solutions/SolutionDetailsContent";
import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";
import EndPointProtection from "../../../components/Solutions/SolutionDetailsContent";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="End Point Protection EDR,XDR,NDR"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Solutions"
      />

      <EndPointProtection />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
