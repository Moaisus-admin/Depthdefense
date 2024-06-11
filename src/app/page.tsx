import React from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import MainBanner from "../components/HomeDemoFive/MainBanner";
import PartnersTwo from "../components/Common/PartnersTwo";
import Features from "../components/HomeDemoFive/Features";
import AboutUs from "../components/HomeDemoFive/AboutUs";
import OurChallenges from "../components/Common/OurChallenges";
import TeamMember from "../components/Common/TeamMember";
import GetInTouchFormTwo from "../components/Common/GetInTouchFormTwo";
import Footer from "../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarFour />

      <MainBanner />

      <Features />

      <AboutUs />

      <PartnersTwo />

      <OurChallenges />

      <TeamMember />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
