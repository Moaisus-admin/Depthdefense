"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "hcollapse navbar-collapse"
    : "hcollapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area">
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md">
                <Link href="/" className="navbar-brand">
                  <Image
                    src="/images/Depth-logo-1.jpg"
                    alt="logo"
                    width={150}
                    height={42}
                  />
                </Link>

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto">
                    {menus.map((menuItem) => (
                      <MenuItem key={menuItem.label} {...menuItem} />
                    ))}
                  </ul>
                </div>

                <div className="others-option">
                  <div className="get-quote">
                    <Link href="/contact" className="default-btn">
                      <span>{t("Get a Quote")}</span>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
