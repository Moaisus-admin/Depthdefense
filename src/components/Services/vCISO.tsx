"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

const VCISO: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="about-us-area pb-70  text-black  dark:bg-zinc-800">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="dark:text-white mt-11">
          <Typewriter
            key={t("vCISODescription")}
            words={[t("vCISODescription")]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={10}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="row col-lg-12 items-center">
          <div className="w-full col-lg-6">
            <div className="about-img mr-auto w-fit">
              <Image
                src="/images/services/services-Al.jpg"
                alt="Image"
                width={300}
                height={345}
                layout="responsive"
                className="pt-[80px]"
              />
            </div>
          </div>

          <div className="w-full col-lg-6 text-black">
            <div className="about-content">
              <div className="about-title">
                <h2 className="dark:text-white">{t("vCISOBenefitsTitle")}</h2>
              </div>

              <ul
                ref={ref}
                className="transition-opacity duration-500 ease-in-out"
              >
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("vCISOBenefit1")}
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("vCISOBenefit2")}
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("vCISOBenefit3")}
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("vCISOBenefit4")}
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("vCISOBenefit5")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCISO;
