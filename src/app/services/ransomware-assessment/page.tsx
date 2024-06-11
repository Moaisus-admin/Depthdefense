import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import Ransomware from "@/components/Services/Ransomware";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Ransomware Assessment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Ransomware Assessment"
      />

      <Ransomware />

      <PartnersTwo />

      <Footer />
    </>
  );
}
