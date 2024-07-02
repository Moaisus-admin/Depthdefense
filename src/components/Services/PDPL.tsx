"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PDPL: React.FC = () => {
  const { t } = useTranslation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const refs = [ref1, ref2, ref3]; // replace with your actual refs

    refs.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { scale: 0.5, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="blog-column-two-area ptb-100  dark:bg-zinc-600 text-black">
        <div className="container">
          <div className="row w-full">
            <div className="col-lg-12 flex justify-center mt-[50px] mb-6">
              <Image
                src="/images/services/services-Ao.jpg"
                alt="Image"
                width={810}
                height={400}
              />
            </div>
            <div className="col-lg-9 col-md-12 m-auto">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content rounded-xl dark:bg-zinc-700 "
                  ref={ref1}
                >
                  <p className="dark:text-white ">{t("pdplDescription")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-11 col-md-12 mt-6 m-auto">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-700 rounded-xl"
                  ref={ref2}
                >
                  <h2 className="text-2xl mb-2 dark:text-white">
                    {t("pdplTitle")}
                  </h2>
                  <p className="dark:text-white">{t("pdplDescription2")}</p>

                  <p className="dark:text-white">{t("pdplDescription3")}</p>
                  <p className="dark:text-white">{t("pdplDescription4")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 mt-6">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-700 rounded-xl"
                  ref={ref3}
                >
                  <h2 className="text-2xl mb-2 dark:text-white">
                    {t("pdplTitle2")}
                  </h2>
                  <p className="dark:text-white">{t("pdplDescription5")}</p>

                  <p className="dark:text-white">{t("pdplDescription6")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDPL;
