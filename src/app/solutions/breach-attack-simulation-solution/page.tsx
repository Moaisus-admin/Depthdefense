import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsBreachAttack from "../../../components/Solutions/SolutionsBreachAttack";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Breach & Attack Simulation Solution"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Breach & Attack Simulation Solution"
      />
      <SolutionsBreachAttack />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
