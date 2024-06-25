import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServicesCard from "../../components/Solutions/Solutions";
import Footer from "../../components/Layouts/Footer";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Solutions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Solutions"
      />

      <ServicesCard />

      <Footer />
    </>
  );
}
