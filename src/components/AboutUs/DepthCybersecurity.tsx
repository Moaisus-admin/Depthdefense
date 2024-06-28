"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const DepthCybersecurity: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="solution-area solution-area-three white-bg pt-[60px] pb-70 dark:bg-zinc-900">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="solution-content">
                <div className="solution-title">
                  <h2 className="text-red-600">{t("title")}</h2>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one dark:bg-zinc-800">
                      <div className="overly-two pt-4">
                        <p className="pb-2 text-lg dark:text-white">
                          {t("insiderThreats")}
                        </p>
                        <p className="pb-2 text-lg dark:text-white">
                          {" "}
                          {t("defenseInDepth")}
                        </p>{" "}
                        <p className="pb-2 text-lg dark:text-white">
                          {" "}
                          {t("networkSegmentation")}
                        </p>
                        <span className="NumberLogo dark:text-white">01</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one dark:bg-zinc-800">
                      <div className="overly-two pt-4">
                        <p className="pb-2 text-lg dark:text-white">
                          {t("minimizeImpactDataBreaches")}
                        </p>{" "}
                        <p className="pb-2 text-lg dark:text-white">
                          {" "}
                          {t("increaseBreakoutTime")}
                        </p>{" "}
                        <p className="pb-2 text-lg dark:text-white">
                          {" "}
                          {t("reduceDataCompromise")}
                        </p>
                        <span className="NumberLogo dark:text-white">02</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pb-9">
              <div className="solution-img-two text-center">
                <Image
                  src="/images/solution-img-2.png"
                  alt="Image"
                  width={524}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="solution-shape-left shape-three">
          <Image
            src="/images/solution-shape-left.png"
            alt="Image"
            width={153}
            height={144}
          />
        </div>
      </div>
    </>
  );
};

export default DepthCybersecurity;
