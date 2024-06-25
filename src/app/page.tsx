import React from "react";
import NavbarThree from "../components/Layouts/NavbarThree";
import MainBanner from "../components/HomeDemoThree/MainBanner";
import Features from "../components/HomeDemoThree/Features";
import OurApproach from "../components/HomeDemoThree/OurApproach";
import Solution from "../components/HomeDemoThree/Solution";
import CyberSafety from "../components/HomeDemoThree/CyberSafety";
import WhyChooseUs from "../components/HomeDemoThree/WhyChooseUs";
import TeamMemberTwo from "../components/Common/TeamMemberTwo";
import Protects from "../components/HomeDemoThree/Protects";
import Footer from "../components/Layouts/Footer";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import Features2 from "@/components/HomeDemoThree/Features2";

export default function Page() {
  return (
    <>
      <div className="bg-f5f7fa">
        <NavbarThree />

        <MainBanner />

        <Features />

        <OurApproach />

        <div className="pt-[100px] dark:bg-zinc-600">
          <Features2 />
        </div>

        <Solution />

        {/* <CyberSafety /> */}

        <WhyChooseUs />

        <Slider />

        <TeamMemberTwo />

        <Protects />

        <Footer />
      </div>
    </>
  );
}
