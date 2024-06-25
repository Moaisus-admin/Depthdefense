import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsIdentityManagement from "../../../components/Solutions/SolutionsIdentityManagement";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Identity and Access Management"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Identity and Access Management"
      />

      <SolutionsIdentityManagement />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
