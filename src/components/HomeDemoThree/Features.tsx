"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Features: React.FC = () => {
  const { t } = useTranslation();
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
                      {t("privacyDataProtectionLaw")}
                    </h3>
                  </div>
                  <p>{t("privacyDataProtectionLawDesc")}</p>
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
                      {t("nationalDataManagement")}
                    </h3>
                  </div>
                  <p>{t("nationalDataManagementDesc")}</p>
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
                    <h3 className="dark:text-white"> {t("SAMACompliance")}</h3>
                  </div>
                  <p>{t("SAMAComplianceDesc")}</p>
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
