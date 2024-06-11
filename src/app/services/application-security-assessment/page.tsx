import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import SecurituyAssesment from "@/components/Services/SecurityAssesment";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Application Security Assessment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Application Security Assessment"
      />

      <SecurituyAssesment />

      <PartnersTwo />

      <Footer />
    </>
  );
}
