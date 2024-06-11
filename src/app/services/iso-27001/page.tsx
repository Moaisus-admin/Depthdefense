import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import ISO from "@/components/Services/ISO27001";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="ISO 27001"
        homePageUrl="/"
        homePageText="Home"
        activePageText="ISO 27001"
      />

      <ISO />

      <PartnersTwo />

      <Footer />
    </>
  );
}
