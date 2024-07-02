"use client";
import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GetInTouchFormTwo from "../../../components/Common/GetInTouchFormTwo";
import SolutionsAPT from "../../../components/Solutions/SolutionsAPT";
import Slider from "@/components/HomeDemoThree/Slider/Slider";
import NavbarThree from "@/components/Layouts/NavbarThree";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle="Advanced Persistent Threat"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Advanced Persistent Threat"
      />
      <SolutionsAPT />

      <Slider />

      <GetInTouchFormTwo />

      <Footer />
    </>
  );
}
