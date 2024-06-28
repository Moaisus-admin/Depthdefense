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
            <h2 className="text-center dark:text-white">
              {t("strengthenCybersecurity")}
            </h2>
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one dark:text-white dark:bg-zinc-700 rounded-2xl">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3 className="dark:text-white"> {t("SOCIRService")}</h3>
                  </div>
                  <p>{t("SOCIRServiceDesc")}</p>
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
              <div className="single-feature overly-one dark:text-white dark:bg-zinc-700 rounded-2xl">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3 className="dark:text-white"> {t("VAPT")}</h3>
                  </div>
                  <p>{t("VAPTDesc")}</p>
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
              <div className="single-feature overly-one dark:text-white dark:bg-zinc-700 rounded-2xl">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3 className="dark:text-white"> {t("riskManagement")}</h3>
                  </div>
                  <p>{t("riskManagementDesc")}</p>
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
