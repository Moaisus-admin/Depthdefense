import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SolutionsCard from "../../components/Solutions/SolutionsCard";
import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchForm from "@/components/Common/GetInTouchForm";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="SIEM (Security Information and Event Management)"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Solutions"
      />

      <SolutionsCard />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
