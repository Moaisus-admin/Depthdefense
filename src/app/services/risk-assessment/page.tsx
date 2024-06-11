import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import RiskAssesment from "@/components/Services/RiskAssesment";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Risk Assessment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Risk Assessment"
      />

      <RiskAssesment />

      <PartnersTwo />

      <Footer />
    </>
  );
}
