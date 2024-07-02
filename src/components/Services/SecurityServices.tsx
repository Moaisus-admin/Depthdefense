"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

const SecurityServices: React.FC = () => {
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
            key={t("managed_security_services")}
            words={[t("managed_security_services")]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={10}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="about-img mr-auto w-fit">
              <Image
                src="/images/services/services-Am.jpg"
                alt="Image"
                width={300}
                height={345}
                layout="responsive"
                className="pt-[80px]"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-black">
            <div className="about-content">
              <div className="about-title">
                <h2 className="dark:text-white mt-[50px]">
                  {t("benefits_of_mss")}
                </h2>
              </div>

              <ul
                ref={ref}
                className="transition-opacity duration-500 ease-in-out"
              >
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("proactive_threat_detection")}
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("reduced_security_risk")}
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("cost_effective")}
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("expertise")}
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("compliance_and_regulations")}
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("24x7x365_support")}
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  {t("business_continuity")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityServices;
