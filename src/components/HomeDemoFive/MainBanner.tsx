"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const MainBanner: React.FC = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const bannerRef = useRef(null);
  const headings = [
    "Personal Data Protection Law Compliance",
    "Risk Assessment",
    "SAMA Compliance",
    "NCA Compliance",
    "CMA Compliance",
    "CCC Compliance",
    "CITC Compliance",
    "Vulnerability Assessment",
    "Penetration Testing",
    "Secure Code Review",
    "Red Teaming",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHeadingIndex((prevIndex) =>
        prevIndex === headings.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    gsap.to(bannerRef.current, {
      backgroundPosition: "200% 0",
      ease: "none",
      repeat: -1,
      duration: 15,
    });

    return () => clearTimeout(timer);
  }, [currentHeadingIndex]);

  return (
    <>
      <div
        className="banner-area banner-area-five bg-5 jarallax w-full gradient-background"
        ref={bannerRef}
      >
        <div className="d-table w-full">
          <div className="d-table-cell w-full">
            <div className="container w-full">
              <div className="banner-content">
                <span className="top-title w-full text-3xl">
                  World Class Cyber Security
                </span>
                <h1 className="transition-opacity duration-1000 opacity-100 w-full">
                  {headings.map((heading, index) => (
                    <span
                      key={index}
                      className={`${
                        index === currentHeadingIndex
                          ? "fade-in-text"
                          : "hidden"
                      }`}
                    >
                      {heading}
                    </span>
                  ))}
                </h1>
                <p className="text-xl">
                  Cyber security is the protection from the theft to protect of
                  our computer systems <br /> and networks or being damaged of
                  our hardware and software.
                </p>

                <div className="banner-btn">
                  <Link href="/about-us" className="default-btn mb-3">
                    <span>About Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
