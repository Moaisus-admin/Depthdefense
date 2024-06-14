import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "../../../components/Common/PartnersTwo";
import CompromiseAssesment from "../../../components/Services/CompromiseAssesment";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Compromise Assessment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Compromise Assessment"
      />

      <CompromiseAssesment />

      <PartnersTwo />

      <Footer />
    </>
  );
}
