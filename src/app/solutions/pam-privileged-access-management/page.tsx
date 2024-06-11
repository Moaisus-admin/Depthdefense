import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";
import SolutionsPAM from "@/components/Solutions/SolutionsPAM";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Privilege Access Management"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privilege Access Management"
      />
      <SolutionsPAM />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
