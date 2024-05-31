import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import TestimonialsContent from "../../components/Testimonials/TestimonialsContent";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
      />

      <TestimonialsContent />

      <Footer />
    </>
  );
}
