import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import PartnersTwo from "@/components/Common/PartnersTwo";
import GetInTouchFormTwo from "@/components/Common/GetInTouchFormTwo";
import SolutionNextgenFirewall from "@/components/Solutions/SolutionNextgenFirewall";
import SolutionsPAM from "@/components/Solutions/SolutionsPAM";
import SolutionsThreat from "@/components/Solutions/SolutionsThreat";
import SolutionsAPT from "@/components/Solutions/SolutionsAPT";
import SolutionsBreachAttack from "@/components/Solutions/SolutionsBreachAttack";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Next Gen Firewall & WAF"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Solutions"
      />
      <SolutionsBreachAttack />

      <PartnersTwo />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
