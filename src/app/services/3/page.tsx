import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesCard from "../../../components/Services/ServicesCard";
import Footer from "../../../components/Layouts/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="Services Style Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Three"
      />

      <div className="our-approach-area-three pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Approach</span>
            <h2>How Can i Protect my Website Form Cyber Attacks</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-key"></i>
                  </div>

                  <h3>Identifying Threats</h3>
                  <p>
                    Lorem ipsum dolor amet, cons ectetur adipiscing elit, sed
                    eiu smod tempor incididunt{" "}
                  </p>

                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-padlock"></i>
                  </div>

                  <h3>Keep Software Updated </h3>
                  <p>
                    Lorem ipsum dolor amet, cons ectetur adipiscing elit, sed
                    eiu smod tempor incididunt{" "}
                  </p>

                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-url"></i>
                  </div>

                  <h3>Check Website Url</h3>
                  <p>
                    Lorem ipsum dolor amet, cons ectetur adipiscing elit, sed
                    eiu smod tempor incididunt{" "}
                  </p>

                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-antivirus"></i>
                  </div>

                  <h3>Use Antivirus Software</h3>
                  <p>
                    Lorem ipsum dolor amet, cons ectetur adipiscing elit, sed
                    eiu smod tempor incididunt{" "}
                  </p>

                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesCard />

      <Footer />
    </>
  );
}
