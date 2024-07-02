"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompromiseAssesment: React.FC = () => {
  const { t } = useTranslation();
  const p1Ref = useRef(null);
  const imageRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      p1Ref.current,
      { x: 70, autoAlpha: 0 }, // starting state
      {
        // ending state
        duration: 1,
        x: 0,
        autoAlpha: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: p1Ref.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(imageRef.current, {
      y: 20, // Move the image 20px up
      duration: 1, // The animation should last 1 second
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation on alternate iterations
      ease: "power1.inOut", // Use a smooth easing function
    });

    [cardRef1, cardRef2, cardRef3].forEach((cardRef) => {
      gsap.fromTo(
        cardRef.current,
        { rotationY: 90, autoAlpha: 0, transformOrigin: "left center" },
        {
          duration: 3,
          rotationY: 0,
          autoAlpha: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="blog-column-two-area ptb-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" ref={imageRef}>
              <Image
                src="/images/services/services-Af.jpg"
                alt="Image"
                width={510}
                height={400}
              />
            </div>
            <div className="col-lg-6 col-md-12 mt-[90px]">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={p1Ref}
                >
                  <p className="dark:text-white">
                    {t("compromise_assessment_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row w-full m-auto">
            <div className="solution-title">
              <h2 className="dark:text-white NumberLogoTitle">
                {t("benefits_title")}
              </h2>
            </div>

            <div className="col-md-12">
              <div
                className="single-solution  dark:bg-zinc-800 dark:text-white main-point"
                ref={cardRef1}
              >
                <div className="overly-two">
                  <h3 className="dark:text-white"></h3>
                  <p className="mt-5">{t("benefit_1")}</p>
                  <span className="NumberLogo">01</span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="single-solution dark:bg-zinc-800 dark:text-white main-point"
                ref={cardRef2}
              >
                <div className="overly-two">
                  <h3 className="dark:text-white"></h3>
                  <p className="mt-5">{t("benefit_2")}</p>
                  <span className="NumberLogo">02</span>
                </div>
              </div>
            </div>

            <div className="col-md-12 ">
              <div
                className="single-solution dark:bg-zinc-800 dark:text-white main-point"
                ref={cardRef3}
              >
                <div className="overly-two">
                  <h3 className="dark:text-white"></h3>
                  <p className="mt-5">{t("benefit_3")}</p>
                  <span className="NumberLogo">03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompromiseAssesment;
