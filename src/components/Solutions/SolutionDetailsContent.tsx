"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EndPointProtection: React.FC = () => {
  const { t } = useTranslation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const elements = [ref1, ref2, ref3, ref4];
    elements.forEach((ref) => {
      gsap.set(ref.current, {
        x: "-100vw",
        autoAlpha: 0,
      });

      gsap.to(ref.current, {
        x: "0",
        autoAlpha: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);
  return (
    <>
      <div className="blog-column-two-area ptb-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6" ref={ref1}>
              <div className="single-blog-posts">
                <Image
                  src="/images/solutions/solution-3.jpg"
                  alt="Image"
                  width={810}
                  height={500}
                />

                <div className="single-blog-content">
                  <span className="text-2xl">EDR:</span>

                  <p className="dark:text-white">{t("edr_description")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6" ref={ref2}>
              <div className="single-blog-posts">
                <Image
                  src="/images/solutions/XDR.jpg"
                  alt="Image"
                  width={810}
                  height={500}
                />

                <div className="single-blog-content">
                  <span className="text-2xl">XDR</span>

                  <p className="dark:text-white">{t("xdr_description")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6" ref={ref3}>
              <div className="single-blog-posts">
                <Image
                  src="/images/solutions/NDR.jpg"
                  alt="Image"
                  width={810}
                  height={500}
                />

                <div className="single-blog-content">
                  <span className="text-2xl">NDR</span>

                  <p className="dark:text-white">{t("ndr_description")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6" ref={ref4}>
              <div className="single-blog-posts">
                <Image
                  src="/images/solutions/MDR.jpg"
                  alt="Image"
                  width={810}
                  height={500}
                />

                <div className="single-blog-content">
                  <span className="text-2xl">MDR</span>

                  <p className="dark:text-white">{t("mdr_description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndPointProtection;
