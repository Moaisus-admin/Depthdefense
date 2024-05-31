import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import LoginForm from "../../components/Auth/LoginForm";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Log In"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Log In"
      />

      <LoginForm />

      <Footer />
    </>
  );
}
