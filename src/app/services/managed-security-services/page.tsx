import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "../../../components/Common/PartnersTwo";
import SecurityServices from "../../../components/Services/SecurityServices";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Managed Security Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Managed Security Services"
      />

      <SecurityServices />

      <PartnersTwo />

      <Footer />
    </>
  );
}
