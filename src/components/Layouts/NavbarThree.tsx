"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import MenuG from "../HomeDemoThree/MenuGsap/MenuG";
import DarkModeToggle from "@/app/DarkModeToggle";
import LanguageToggle from "@/app/RtlToggle";

const NavbarThree: React.FC = () => {
  const { t } = useTranslation();
  const [logoSize, setLogoSize] = useState<{ width: number; height: number }>({
    width: 150,
    height: 42,
  });
  const [isSmallWindow, setIsSmallWindow] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallWindow(window.innerWidth < 640); // Adjust threshold as needed

      // Resize logo based on window width
      const newSize =
        window.innerWidth < 640
          ? { width: 80, height: 34 } // Small screen logo size
          : { width: 150, height: 42 }; // Default logo size

      setLogoSize(newSize);
    };

    handleResize(); // Call initially to set state based on current window size
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);

  const menuGMargin = isSmallWindow ? "ml-4" : "ml-[60px]";

  return (
    <header className="header-area p-relative">
      {/* Ensure the navbar area remains LTR even if the rest of the website changes to RTL */}
      <div
        className="navbar-area navbar-area-two fixed top-0 w-full z-50 shadow-lg "
        style={{ direction: "ltr" }}
      >
        <div className="main-na">
          <div className="container mx-auto">
            <nav className="navbar navbar-expand-md">
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/Depth-logo-1.jpg"
                  alt="logo"
                  width={logoSize.width}
                  height={logoSize.height}
                />
              </Link>

              <div className="others-option flex items-center ml-auto">
                <span
                  className={
                    isSmallWindow ? "fixed-position darkmode-toggle" : ""
                  }
                >
                  <DarkModeToggle />{" "}
                </span>
                <span
                  className={
                    isSmallWindow
                      ? "fixed-position language-toggle ml-2 mr-2"
                      : "ml-2 mr-2"
                  }
                >
                  <LanguageToggle />
                </span>
                <div className="get-quote">
                  {/* <Link href="/contact" className="default-btn"> */}
                  {/* <span>{t("Get a Quote")}</span>{" "} */}
                  {/* </Link> */}
                  <span className={menuGMargin}>
                    <MenuG />
                  </span>
                </div>

                <div className="whatsapp-icon absolute right-[-82px] top-[450px]">
                  <a
                    href="https://wa.me/966539006060"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/whatsapp.png"
                      alt="WhatsApp"
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarThree;
