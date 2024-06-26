"use client";

import React from "react";
import Image from "next/image";

const Solution: React.FC = () => {
  return (
    <>
      <div className="solution-area solution-area-three white-bg pt-100 pb-70 dark:bg-zinc-500 dark:text-white">
        <div className="container">
          <div className="row align-items-cente">
            <div className="col-lg-6">
              <div className="solution-content">
                <div className="solution-title">
                  <span className="text-2xl ">What We Do</span>
                  <h2 className="dark:text-white">
                    The Perfect Solution For all Protection
                  </h2>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution-new overly-one">
                      <div className="overly-two">
                        <h3 className="dark:text-white">
                          PDPL -Privacy Data Protection Law{" "}
                        </h3>
                        <span className="NumberLogo">01</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution-new overly-one">
                      <div className="overly-two">
                        <h3 className="dark:text-white">
                          NDMO -National Data Management Office
                        </h3>
                        <span className="NumberLogo">02</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6 offset-md-3 offset-lg-0">
                    <div className="single-solution-new overly-one">
                      <div className="overly-two">
                        <h3 className="dark:text-white">
                          NCA -National Cybersecurity Authority{" "}
                        </h3>
                        <span className="NumberLogo">03</span>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-12 col-md-6">
                    <div className="single-solution-new overly-one">
                      <div className="overly-two">
                        <h3 className="dark:text-white">
                          Essential Cybersecurity Control
                        </h3>
                        <span className="NumberLogo">04</span>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution-new overly-one">
                      <div className="overly-two">
                        <h3 className="dark:text-white">
                          OTCC -Operational Technology Cybersecurity Control
                        </h3>
                        <span className="NumberLogo">04</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution-new overly-one">
                      <div className="overly-two">
                        <h3 className="dark:text-white">
                          DCC - Data Cybersecurity Controls
                        </h3>
                        <span className="NumberLogo dark:text-white">05</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution-new overly-one">
                      <div className="overly-two">
                        <h3 className="dark:text-white">
                        Aramco Cybersecurity Compliance Certification
                        </h3>
                        <span className="NumberLogo dark:text-white">06</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="solution-img-two text-center mt-4">
                <Image
                  src="/images/AdobeStock_330520825.jpeg"
                  alt="Image"
                  width={580}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="solution-shape-left shape-three">
          <Image
            src="/images/AdobeStock_589118176.png"
            alt="Image"
            width={100}
            height={90}
          />
        </div>
      </div>
    </>
  );
};

export default Solution;
