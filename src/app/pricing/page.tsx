import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import PriceTable from "../../components/Common/PriceTable";
import GetInTouchFormTwo from "../../components/Common/GetInTouchFormTwo";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
      />

      <PriceTable />

      <div className="divider"></div>

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
