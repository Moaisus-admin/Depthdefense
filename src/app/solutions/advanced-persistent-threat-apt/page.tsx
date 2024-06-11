import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";
import SolutionsAPT from "@/components/Solutions/SolutionsAPT";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Advanced Persistent Threat"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Advanced Persistent Threat"
      />
      <SolutionsAPT />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
