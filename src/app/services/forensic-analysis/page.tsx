import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "../../../components/Common/PartnersTwo";
import ForensicAnalysis from "../../../components/Services/ForensicAnalysis";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Forensic Analysis"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Forensic Analysis"
      />

      <ForensicAnalysis />

      <PartnersTwo />

      <Footer />
    </>
  );
}
