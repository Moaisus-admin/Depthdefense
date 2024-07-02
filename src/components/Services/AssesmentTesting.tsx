"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AssesmentTesting: React.FC = () => {
  const { t } = useTranslation();
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.fromTo(
        imageRef.current,
        { scaleX: 0 }, // Start with no width
        {
          duration: 3, // Make the animation slower for the image
          scaleX: 1, // End with full width
          ease: "power1.out",
        }
      );

      [cardRef1, cardRef2, cardRef3].forEach((cardRef) => {
        gsap.fromTo(
          cardRef.current,
          { scaleX: 0 }, // Start with no width
          {
            duration: 1,
            scaleX: 1, // End with full width
            ease: "power1.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top center", // when the top of the trigger hits the center of the viewport
              end: "bottom center", // end after scrolling 500px beyond the start
              scrub: true,
              toggleActions: "play none none reverse", // reverse the animation when scrolling past it
            },
          }
        );
      });
    }, 500); // Delay of 500 milliseconds
  }, []);
  return (
    <>
      <div className="blog-column-two-area pbt-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row gap-5">
            <Image
              src="/images/services/services-Ab.jpg"
              alt="Image"
              width={510}
              height={400}
              ref={imageRef}
            />
            <div className="col-lg-12 col-md-12 mt-[90px]">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={cardRef1}
                >
                  <p className="dark:text-white">{t("cyber_attacks")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={cardRef2}
                >
                  <p className="dark:text-white">{t("va_and_pt")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={cardRef3}
                >
                  <p className="dark:text-white">{t("intrusion_testing")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssesmentTesting;
