import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesDetailsContent from "../../../components/Services/ServicesDetailsContent";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Cybersecurity Assessment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cybersecurity Assessment"
      />

      <ServicesDetailsContent />

      <PartnersTwo />

      <Footer />
    </>
  );
}
