import React from "react";

import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import OurSolution from "../../components/HomeDemoFive/OurSolution";
import StructureCybersecurity from "../../components/AboutUs/StructureOfCybersecurity";
import DepthCybersecurity from "../../components/AboutUs/DepthCybersecurity";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
      />

      <div className="pt-100 pb-70 dark:bg-zinc-800">
        <OurSolution />
      </div>

      <StructureCybersecurity />

      <DepthCybersecurity />

      <Footer />
    </>
  );
}
