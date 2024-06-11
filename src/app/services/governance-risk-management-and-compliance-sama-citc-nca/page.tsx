import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import Governance from "@/components/Services/Governance";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Malware Analysis"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Malware Analysis"
      />

      <Governance />

      <PartnersTwo />

      <Footer />
    </>
  );
}
