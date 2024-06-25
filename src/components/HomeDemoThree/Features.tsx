"use client";

import React from "react";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <>
      <div className="feature-area feature-area-three pb-70 dark:bg-zinc-600">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one dark:text-white dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3 className="dark:text-white">
                      Privacy Data Protection Law
                    </h3>
                  </div>
                  <p>
                    Achieve full compliance with Saudi Arabias PDPL using our
                    advanced solutions, designed to protect personal data and
                    ensure privacy across your organization.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape-2.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one dark:text-white dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3 className="dark:text-white">
                      National Data Management
                    </h3>
                  </div>
                  <p>
                    Optimize your data governance and security with our
                    NDMO-compliant solutions, ensuring seamless alignment with
                    Saudi Arabias National Data Management Office standards.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape-2.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-feature overly-one dark:text-white dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3 className="dark:text-white">SAMA Compliance</h3>
                  </div>
                  <p>
                    Ensure your financial institution meets regulatory standards
                    effortlessly with our comprehensive SAMA Compliance
                    solution, designed to safeguard your operations.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape-2.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
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

export default Features;
