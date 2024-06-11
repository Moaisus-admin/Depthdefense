import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";
import SolutionsIdentityManagement from "@/components/Solutions/SolutionsIdentityManagement";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Identity and Access Management"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Identity and Access Management"
      />

      <SolutionsIdentityManagement />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
