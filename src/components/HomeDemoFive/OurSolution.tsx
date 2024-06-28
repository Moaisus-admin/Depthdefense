"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

const OurSolution: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="solution-area pb-70 dark:bg-zinc-700">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-content">
                <div className="solution-title">
                  <span className="text-2xl text-red-600">
                    {t("whoWeAreTitle")}
                  </span>
                  <h2 className="dark:text-white">
                    <Typewriter
                      key={t("whoWeAreDescription")} // Add this line
                      words={[t("whoWeAreDescription")]}
                      loop={1}
                      cursor
                      cursorStyle=""
                      typeSpeed={20}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one dark:bg-zinc-800">
                      <div className="overly-two">
                        <h3 className="dark:text-white">{t("visionTitle")}</h3>
                        <p className="dark:text-white">
                          {t("visionDescription")}
                        </p>
                        <span className="NumberLogo">01</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one dark:bg-zinc-800">
                      <div className="overly-two">
                        <h3 className="dark:text-white">{t("missionTitle")}</h3>
                        <p className="dark:text-white">
                          {t("missionDescription")}
                        </p>
                        <span className="NumberLogo">02</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one dark:bg-zinc-800">
                      <div className="overly-two">
                        <h3 className="dark:text-white">
                          {t("whatWeDoTitle")}
                        </h3>
                        <p className="dark:text-white">
                          {t("whatWeDoDescription")}
                        </p>
                        <span className="NumberLogo">03</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="solution-img">
                <Image
                  src="/images/solution-img.png"
                  alt="Image"
                  width={875}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolution;
