"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";

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
      <div className="banner-area banner-area-three relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/bannervdo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="d-table relative z-10">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 text-center">
                  <div className="banner-content">
                    <span className="top-title text-xl">
                      World Class Cyber Security
                    </span>
                    <h2 className="transition-opacity duration-1000 opacity-100 w-full text-white">
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
                    </h2>
                    <p className="text-white">
                      Cyber security is the protection from the theft to protect
                      of our computer systems and networks or being damaged of
                      our hardware and software.
                    </p>

                    <div className="banner-btn">
                      <Link href="/contact" className="default-btn">
                        <span>Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-6">
                  <div className="banner-img">
                    <Image
                      src="/images/banner/banner-img.png"
                      alt="Image"
                      width={714}
                      height={632}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
