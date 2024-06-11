import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import DDOS from "@/components/Services/DDOS";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="DDoS Simulation"
        homePageUrl="/"
        homePageText="Home"
        activePageText="DDoS Simulation"
      />

      <DDOS />

      <PartnersTwo />

      <Footer />
    </>
  );
}
