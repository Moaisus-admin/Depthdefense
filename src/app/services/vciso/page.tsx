import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "../../../components/Common/PartnersTwo";
import VCISO from "../../../components/Services/vCISO";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="vCISO"
        homePageUrl="/"
        homePageText="Home"
        activePageText="vCISO"
      />

      <VCISO />

      <PartnersTwo />

      <Footer />
    </>
  );
}
