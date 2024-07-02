"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Ransomware: React.FC = () => {
  const { t } = useTranslation();
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scaleX: 0 }, // Start with no width
      {
        duration: 3, // Make the animation slower for the image
        opacity: 1, // End with full visibility
        scaleX: 1, // End with full width
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom", // when the top of the trigger hits the center of the viewport
          end: "bottom center", // end after scrolling 500px beyond the start
          toggleActions: "play none none none", // don't reverse the animation
        },
      }
    );

    gsap.fromTo(
      cardRef.current,
      { rotationY: 90, autoAlpha: 0, transformOrigin: "left center" }, // Start rotated 90 degrees around the left center
      {
        duration: 1, // Make the animation last 1 second
        rotationY: 0, // End at the final position
        autoAlpha: 1, // End fully visible
        ease: "power1.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top center", // when the top of the trigger hits the center of the viewport
          toggleActions: "play none none none", // don't reverse the animation
        },
      }
    );
  }, []);

  return (
    <>
      <div className="blog-column-two-area ptb-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div className="single-blog-posts">
                <div ref={imageRef}>
                  <Image
                    src="/images/services/services-Ad.jpg"
                    alt="Image"
                    width={810}
                    height={500}
                  />
                </div>

                <div
                  ref={cardRef}
                  className="single-blog-content dark:bg-zinc-600 dark:text-white rounded-xl"
                >
                  <span className="text-2xl">{t("ransomwareTitle")}</span>

                  <p>{t("ransomwareDescription")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ransomware;
