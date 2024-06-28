"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import ContactForm from "../../components/Contact/ContactForm";
import GoogleMap from "../../components/Contact/GoogleMap";
import NavbarThree from "@/components/Layouts/NavbarThree";

export default function Page() {
  const { t } = useTranslation();
  return (
    <>
      <NavbarThree />

      <PageBanner
        pageTitle={t("contactUsTitle")}
        homePageUrl="/"
        homePageText="Home"
        activePageText={t("contactUsTitle")}
      />

      <ContactForm />

      <GoogleMap />

      <Footer />
    </>
  );
}
