"use client";

import DarkModeToggle from "@/app/DarkModeToggle";
import RtlToggle from "@/app/RtlToggle";
import React from "react";

const TopHeaderTwo: React.FC = () => {
  return (
    <>
      <div className="top-header top-header-four">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6">
              <ul className="header-left-content">
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:966-539006060">+966-539006060</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-sm-6">
              <ul className="header-right-content">
                <li>
                  <RtlToggle />

                  <i className=""></i>
                </li>
                <li>
                  <DarkModeToggle />
                  <i className=""></i>
                </li>
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
                    <i className="bx bxl-linkedin"></i>
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
        </div>
      </div>
    </>
  );
};

export default TopHeaderTwo;
