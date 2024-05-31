"use client";

import React from "react";
import Link from "next/link";

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
  return (
    <>
      <div className="page-title-area page-title-style-two">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>

            <ul>
              <li>
                <Link href={homePageUrl}>
                  <i className="bx bx-home"></i> {homePageText}
                </Link>
              </li>
              <li className="active">{activePageText}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
