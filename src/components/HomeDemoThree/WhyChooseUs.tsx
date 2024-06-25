"use client";

import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="counter-area counter-area-three pt-100 pb-70 dark:bg-zinc-600">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="counter-img" style={{marginTop:"100px"}}>
                <Image
                  src="/images/AdobeStock_580196665.jpeg"
                  alt="Image"
                  width={526}
                  height={582}
                />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="counter-max-wide">
                <div className="section-title">
                  <span className="dark:text-white text-2xl">Why Choose Us</span>
                  <h2 className="dark:text-white">
                    We Have a Lot of Skills in Cyber Security
                  </h2>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-authentication"></i>
                        <h2 className="dark:text-white">365</h2>
                        <h3 className="dark:text-white">Clients Protection</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-reliability"></i>
                        <h2 className="dark:text-white">1000</h2>
                        <h3 className="dark:text-white">
                          Trusted Organizations
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-web-protection"></i>
                        <h2 className="dark:text-white">567</h2>
                        <h3 className="dark:text-white">Website Protection</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-innovation"></i>
                        <h2 className="dark:text-white">
                          100<span className="target dark:text-white">%</span>
                        </h2>
                        <h3 className="dark:text-white">
                          Innovative Technology
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
