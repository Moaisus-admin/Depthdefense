import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import ServicesCard from "../../components/Services/ServicesCard";
import Footer from "../../components/Layouts/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Services Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style One"
      />

      <ServicesCard />

      <Footer />
    </>
  );
}
