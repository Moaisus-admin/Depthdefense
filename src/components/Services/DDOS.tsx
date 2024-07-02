"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

const DDOS: React.FC = () => {
  const { t } = useTranslation();
  const imageRef = useRef(null);
  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 20, // Move the image 20px up
      duration: 1, // The animation should last 1 second
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation on alternate iterations
      ease: "power1.inOut", // Use a smooth easing function
    });
  }, []);
  return (
    <>
      <div className="our-approach-area pb-70 pt-[50px] dark:bg-zinc-700">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="approach-img" ref={imageRef}>
                <Image
                  src="/images/services/services-Ae.jpg"
                  alt="Image"
                  width={600}
                  height={505}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-content">
                <h3 className="dark:text-white">{t("DDoS Simulation1")}</h3>

                <div className="row">
                  <div className="col-lg-12 col-sm-6">
                    <div className="single-approach-2 dark:bg-zinc-800">
                      <p className="dark:text-white">{t("description1")}</p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-6">
                    <div className="single-approach-2 dark:bg-zinc-800">
                      <p className="dark:text-white">{t("description2")}</p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-6">
                    <div className="single-approach-2 dark:bg-zinc-800">
                      <p className="dark:text-white">{t("description3")}</p>
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

export default DDOS;
