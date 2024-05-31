import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import AboutUsContent from "../../components/AboutUs/AboutUsContent";
import OurChallenges from "../../components/Common/OurChallenges";
import Protects from "../../components/AboutUs/Protects";
import Testimonials from "../../components/Common/Testimonials";
import Partners from "../../components/Common/Partners";
import Footer from "../../components/Layouts/Footer";
import OurSolution from "@/components/HomeDemoFive/OurSolution";
import StructureCybersecurity from "@/components/AboutUs/StructureOfCybersecurity";
import DepthCybersecurity from "@/components/AboutUs/DepthCybersecurity";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
      />

      <div className="pt-100 pb-70 dark:bg-zinc-800">
        <OurSolution />
        {/* <AboutUsContent /> */}
      </div>

      <StructureCybersecurity />

      <DepthCybersecurity />
      {/* <OurChallenges /> */}

      {/* <Protects /> */}

      {/* <Testimonials /> */}

      {/* <Partners /> */}

      <Footer />
    </>
  );
}
