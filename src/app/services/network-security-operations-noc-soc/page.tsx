import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "../../../components/Common/PartnersTwo";
import NetworkSecurity from "../../../components/Services/NetworkSecurity";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Network & Security Operations"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Network & Security Operations"
      />

      <NetworkSecurity />

      <PartnersTwo />

      <Footer />
    </>
  );
}
