"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="counter-area counter-area-three pt-100 pb-70 dark:bg-zinc-600">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="counter-img" style={{ marginTop: "100px" }}>
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
                  <span className="dark:text-white text-2xl">
                    {t("whyChooseUs")}
                  </span>
                  <h2 className="dark:text-white">{t("lotOfSkills")}</h2>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-authentication"></i>
                        <h2 className="dark:text-white">365</h2>
                        <h3 className="dark:text-white">
                          {t("clientsProtection")}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-reliability"></i>
                        <h2 className="dark:text-white">1000</h2>
                        <h3 className="dark:text-white">
                          {t("trustedOrganizations")}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-counter overly-one">
                      <div className="overly-two">
                        <i className="flaticon-web-protection"></i>
                        <h2 className="dark:text-white">567</h2>
                        <h3 className="dark:text-white">
                          {t("websiteProtection")}
                        </h3>
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
                          {t("innovativeTechnology")}
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
