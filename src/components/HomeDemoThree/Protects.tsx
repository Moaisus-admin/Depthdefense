"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const Protects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="protect-area protect-area-three pt-100 pb-70 dark:bg-zinc-500">
        <div className="container">
          <div className="section-title">
            <span className="text-2xl dark:text-white">
              {t("cybersecurityProtect")}
            </span>
            <h2 className="dark:text-white">{t("protectYourWebsite")}</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-challenges overly-one dark:bg-zinc-600">
                <div className="overly-two">
                  <i className="flaticon-database"></i>
                  <h3 className="dark:text-white">{t("databaseSecurity")}</h3>
                  <p className="dark:text-white">{t("databaseSecurityDesc")}</p>
                  <span className="flaticon-database"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-challenges overly-one dark:bg-zinc-600">
                <div className="overly-two">
                  <i className="flaticon-application"></i>
                  <h3 className="dark:text-white">
                    {t("applicationSecurity")}
                  </h3>
                  <p className="dark:text-white">
                    {t("applicationSecurityDesc")}
                  </p>
                  <span className="flaticon-application"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-challenges overly-one dark:bg-zinc-600">
                <div className="overly-two">
                  <i className="flaticon-security"></i>
                  <h3 className="dark:text-white">{t("webSecurity")}</h3>
                  <p className="dark:text-white">{t("webSecurityDesc")}</p>
                  <span className="flaticon-security"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-challenges overly-one dark:bg-zinc-600">
                <div className="overly-two">
                  <i className="flaticon-security-1"></i>
                  <h3 className="dark:text-white">{t("serverSecurity")}</h3>
                  <p className="dark:text-white">{t("serverSecurityDesc")}</p>
                  <span className="flaticon-security-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="protect-left-shape shape-three">
          <Image
            src="/images/protect-left-shape.png"
            alt="Image"
            width={142}
            height={148}
          />
        </div>
      </div>
    </>
  );
};

export default Protects;
