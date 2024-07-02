"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const ForensicAnalysis: React.FC = () => {
  const { t } = useTranslation();
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 20, // Move the image 20px up
      duration: 1, // The animation should last 1 second
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation on alternate iterations
      ease: "power1.inOut", // Use a smooth easing function
    });

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scaleY: 0 }, // Start with no width
      {
        duration: 2, // Make the animation slower for the image
        opacity: 1, // End with full visibility
        scaleY: 1, // End with full width
        ease: "power1.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom", // when the top of the trigger hits the center of the viewport
          end: "bottom center", // end after scrolling 500px beyond the start
          toggleActions: "play none none none", // don't reverse the animation
        },
      }
    );
  }, []);
  return (
    <>
      <div className="about-us-area ptb-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img mb_30" ref={imageRef}>
                <Image
                  src="/images/services/services-Ai.jpg"
                  alt="Image"
                  width={600}
                  height={545}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-title">
                  <div className="col-lg-12 col-md-12 mt-[100px]">
                    <div className="single-blog-posts">
                      <div
                        className="single-blog-content dark:bg-zinc-800 rounded-xl"
                        ref={cardRef}
                      >
                        <p className="dark:text-white">
                          {t("forensic_analysis_definition")}
                        </p>

                        <p className="mt-4 dark:text-white">
                          {t("tracking_digital_activity")}
                        </p>

                        <ul className="text-red-700">
                          <li>
                            <i className="bx bx-check-circle"></i>
                            {t("developing_policy")}
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            {t("assessing_evidence")}
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            {t("acquiring_evidence")}
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            {t("examining_evidence")}
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            {t("documenting_reporting")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForensicAnalysis;
