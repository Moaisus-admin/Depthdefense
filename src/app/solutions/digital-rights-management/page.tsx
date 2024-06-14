import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "../../../components/Common/PartnersTwo";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsDigitalRights from "../../../components/Solutions/DigitalRights";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Digital Rights Management"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Digital Rights Management"
      />
      <SolutionsDigitalRights />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
