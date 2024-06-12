"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface PageBannerProps {
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="page-title-area page-title-style-two">
        <div className="container">
          <div className="page-title-content">
            <h2>{t(pageTitle)}</h2>

            <ul>
              <li>
                <Link href={homePageUrl}>
                  <i className="bx bx-home"></i> {t(homePageText)}
                </Link>
              </li>
              <li className="active">{t(activePageText)}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
