import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import TeamMember from "../../components/Team/TeamMember";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Team Member"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team Member"
      />

      <TeamMember />

      <Footer />
    </>
  );
}
