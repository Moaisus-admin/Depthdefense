"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

const ServicesDetailsContent: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="our-approach-area pb-70 pt-[60px] text-black dark:bg-zinc-700">
        <div className="container">
          <div className="section-title">
            <h2 className="dark:text-white">
              <Typewriter
                key={i18n.language}
                words={[t("Cybersecurity Assessment")]}
                loop={1}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="approach-img">
                <Image
                  src="/images/approach-img.jpg"
                  alt="Image"
                  width={600}
                  height={505}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-content">
                <p className="mt-4 dark:text-white">
                  {t("Cybersecurity Assessment Description 1")}
                </p>

                <p className="mt-5 mb-4 dark:text-white">
                  {t("Cybersecurity Assessment Description 2")}
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <h3 className="mb-4 approach-content dark:text-white">
                {t("Cybersecurity Assessment Description 3")}
              </h3>
              <div className="col-lg-6 col-sm-">
                <div className="single-approach dark:bg-zinc-700">
                  <h3 className="dark:text-white">{t("Current assets")}</h3>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="single-approach dark:bg-zinc-700">
                  <h3 className="dark:text-white">
                    {t(
                      "Business compliance with the relevant security ordinance."
                    )}
                  </h3>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="single-approach dark:bg-zinc-600">
                  <h3 className="dark:text-white">
                    {t(" Vulnerabilities present in the assets.")}
                  </h3>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="single-approach dark:bg-zinc-600">
                  <h3 className="dark:text-white">
                    {t(" Identify the attack surface.")}
                  </h3>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="single-approach dark:bg-zinc-600">
                  <h3 className="dark:text-white">
                    {t("Potential threats and risks on assets.")}
                  </h3>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="single-approach dark:bg-zinc-600">
                  <h3 className="dark:text-white">
                    {t("Assets’ cyber resiliency.")}
                  </h3>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="single-approach dark:bg-zinc-600">
                  <h3 className="dark:text-white">
                    {t(
                      " Assets prevention cost with proportion to assets cost."
                    )}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-lg dark:text-white">{t("paragraph3")}</p>
            </div>
          </div>

          <div className="row mt-[50px]">
            <div className="col-lg-6">
              <div className="section-title">
                <h2 className="mt-4 dark:text-white">
                  {t(
                    " What are the different types of cybersecurity assessments?"
                  )}
                </h2>
              </div>
              <div className="row mt-4">
                <div className="col-lg-6 col-sm-6">
                  <div className="single-approach dark:bg-zinc-600">
                    <h3 className="dark:text-white">{t("Vulnerability")}</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="single-approach dark:bg-zinc-600">
                    <h3 className="dark:text-white">{t("Penetration")}</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="single-approach dark:bg-zinc-600">
                    <h3 className="dark:text-white">{t("Compromise")}</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="single-approach dark:bg-zinc-600">
                    <h3 className="dark:text-white">{t("Social")}</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="single-approach dark:bg-zinc-600">
                    <h3 className="dark:text-white">{t("Red")}</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="single-approach dark:bg-zinc-600">
                    <h3 className="dark:text-white">{t("Third-party")}</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="single-approach dark:bg-zinc-600">
                    <h3 className="dark:text-white">{t("Cloud")}</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="single-approach dark:bg-zinc-600">
                    <h3 className="dark:text-white">{t("Risk")}</h3>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="single-approach dark:bg-zinc-600">
                    <h3 className="dark:text-white">{t("Security")}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="approach-img">
                <Image
                  src="/images/services/services-Aa.jpg"
                  alt="Image"
                  width={600}
                  height={505}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsContent;
