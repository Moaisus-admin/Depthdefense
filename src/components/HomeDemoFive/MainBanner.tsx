"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const MainBanner: React.FC = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const bannerRef = useRef(null);
  const headings = [
    "PDPL Compliance",
    "SAMA Compliance",
    "NCA Compliance",
    "CMA Compliance",
    "CCC Compliance",
    "CITC Compliance",
    "SOC As A Service",
    "Vulnerability Assessment",
    "Penetration Testing",
    "Red Teaming / Blue Teaming",
    
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
  }, [currentHeadingIndex, headings.length]);

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
                  World Class Cybersecurity
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
                <p className="text-2xl">
                  Securing your future in the digital world
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
