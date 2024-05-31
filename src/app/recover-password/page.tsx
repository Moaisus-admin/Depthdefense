import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import RecoverPasswordForm from "../../components/Auth/RecoverPasswordForm";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Recover Password"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Recover Password"
      />

      <RecoverPasswordForm />

      <Footer />
    </>
  );
}
