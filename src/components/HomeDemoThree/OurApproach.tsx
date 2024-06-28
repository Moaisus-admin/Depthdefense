"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const OurApproach: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="our-approach-area-three pb-70 dark:bg-zinc-600">
        <div className="container">
          <div className="section-title">
            <span className="text-3xl dark:text-white">
              {t("ourCoreServices")}
            </span>
            <h2 className="dark:text-white">{t("protectWebsite")}</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-key"></i>
                  </div>
                  <h3 className="dark:text-white"> {t("ISO22301")}</h3>
                  <p className="dark:text-white">{t("ISO22301Desc")}</p>
                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-padlock"></i>
                  </div>
                  <h3 className="dark:text-white"> {t("ISO27001")}</h3>
                  <p className="dark:text-white">{t("ISO27001Desc")}</p>
                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-url"></i>
                  </div>
                  <h3 className="dark:text-white"> {t("CMMI")}</h3>
                  <p className="dark:text-white">{t("CMMIDesc")}</p>
                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-antivirus"></i>
                  </div>
                  <h3 className="dark:text-white"> {t("COBIT")}</h3>
                  <p className="dark:text-white">{t("COBITDesc")}</p>
                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="approach-right-shape shape-three">
          <Image
            src="/images/cyberr.png"
            alt="Image"
            width={210}
            height={162}
          />
        </div>
      </div>
    </>
  );
};

export default OurApproach;
