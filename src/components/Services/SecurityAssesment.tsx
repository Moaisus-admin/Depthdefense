"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecurituyAssesment: React.FC = () => {
  const { t } = useTranslation();
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
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

    gsap.fromTo(
      p2Ref.current,
      { x: 70, autoAlpha: 0 }, // starting state
      {
        // ending state
        duration: 1,
        x: 0,
        autoAlpha: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: p2Ref.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="blog-column-two-area pt-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image
                src="/images/services/services-Ac.jpg"
                alt="Image"
                width={510}
                height={400}
              />
            </div>
            <div className="col-lg-6 col-md-12 mt-6">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={p1Ref}
                >
                  <p className="dark:text-white">
                    {t("app_security_assessment")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 ml-auto">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={p2Ref}
                >
                  <p className="dark:text-white">
                    {t("threat_identification")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurituyAssesment;
