import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PartnersTwo from "../../../components/Common/PartnersTwo";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsBreachAttack from "../../../components/Solutions/SolutionsBreachAttack";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Breach & Attack Simulation Solution"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Breach & Attack Simulation Solution"
      />
      <SolutionsBreachAttack />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
