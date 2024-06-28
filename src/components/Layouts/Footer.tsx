"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100 pb-70 jarallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="/" className="logo">
                  <Image
                    src="/images/Depth-logo-1.jpg"
                    alt="Image"
                    width={150}
                    height={42}
                  />
                </Link>

                <p>{t("companyDescription")}</p>

                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>{t("addressTitle")}</h3>

                <ul className="address">
                  <li className="location">
                    <i className="bx bxs-location-plus"></i>
                    {t("address")}
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a href="mailto:info@depthdefense.com">
                      info@depthdefense.com
                    </a>
                    <a href="#" target="_blank"></a>
                  </li>
                  <li>
                    <i className="bx bxs-phone-call"></i>
                    <a href="tel:966-539006060">966-539006060</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>{t("servicesTitle")}</h3>

                <ul className="import-link">
                  <li>
                    <Link href="#">{t("riskManagement1")}</Link>
                  </li>
                  <li>
                    <Link href="#">{t("vapt")}</Link>
                  </li>
                  <li>
                    <Link href="#">{t("socIrService")}</Link>
                  </li>
                  <li>
                    <Link href="#">{t("offensiveSecurity")}</Link>
                  </li>
                  <li>
                    <Link href="#">{t("nocService")}</Link>
                  </li>
                  <li>
                    <Link href="#">{t("infrastructureService")}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>{t("quickLinksTitle")}</h3>

                <ul className="import-link">
                  <li>
                    <Link href="/">{t("home")}</Link>
                  </li>
                  <li>
                    <Link href="/about-us/">{t("aboutUs")}</Link>
                  </li>
                  <li>
                    <Link href="/services/">{t("services")}</Link>
                  </li>
                  <li>
                    <Link href="#">{t("solution")}</Link>
                  </li>
                  <li>
                    <Link href="/solutions">{t("careers")}</Link>
                  </li>
                  <li>
                    <Link href="/contact/">{t("contact")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy-right-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <p className="flex justify-end gap-1">
                {t("copyright", { year: currentYear })}
                <span className="text-red-500">Depth Defense</span>
              </p>
            </div>

            <div className="col-lg-5 col-md-6">
              <ul className="footer-menu">
                <li>
                  <Link href="/privacy-policy">{t("privacyPolicy")}</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">{t("termsConditions")}</Link>
                </li>
                <li className="text-white">{t("cookiePolicy")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
