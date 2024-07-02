"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Governance: React.FC = () => {
  const { t } = useTranslation();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const p1Ref1 = useRef(null);
  const p1Ref2 = useRef(null);
  const p1Ref3 = useRef(null);
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const pRef3 = useRef(null);
  const pRef4 = useRef(null);
  const pRef5 = useRef(null);
  const pRef6 = useRef(null);
  const pRef7 = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(".fadeIn", { opacity: 0 }, { opacity: 1, duration: 4 });
    const elements = [ref1, ref2, ref3, ref4];
    elements.forEach((ref, index) => {
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
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    const refs = [p1Ref1, p1Ref2, p1Ref3];

    refs.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, scaleX: 0 }, // Start with no width
        {
          duration: 1, // Make the animation slower for the image
          opacity: 1, // End with full visibility
          scaleX: 1, // End with full width
          ease: "power1.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top center", // when the top of the trigger hits the center of the viewport
            end: "bottom center", // end after scrolling 500px beyond the start
            toggleActions: "play none none none", // don't reverse the animation
          },
        }
      );
    });

    const prefs = [pRef1, pRef2, pRef3, pRef4, pRef5, pRef6, pRef7];

    prefs.forEach((pref) => {
      gsap.fromTo(
        pref.current,
        { opacity: 0, scale: 0.5 }, // Start with no visibility and a small scale
        {
          duration: 1, // Make the animation slower for the image
          opacity: 1, // End with full visibility
          scale: 1, // End with full scale
          ease: "bounce.out",
          scrollTrigger: {
            trigger: pref.current,
            start: "top center", // when the top of the trigger hits the center of the viewport
            end: "bottom center", // end after scrolling 500px beyond the start
            toggleActions: "play none none none", // don't reverse the animation
          },
        }
      );
    });

    gsap.to(imageRef.current, {
      y: 20, // Move the image 20px up
      duration: 1, // The animation should last 1 second
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation on alternate iterations
      ease: "power1.inOut", // Use a smooth easing function
    });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div className="our-approach-area pb-70 pt-[60px] text-black dark:bg-zinc-700">
        <div className="container">
          <div className="section-title">
            <h2 className="dark:text-white">GRC</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="approach-img">
                <Image
                  src="/images/services/services-Az.jpg"
                  alt="Image"
                  width={600}
                  height={505}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-content">
                <p className="mt-4 dark:text-white fadeIn">
                  {t("GRC_description")}
                </p>

                <div className="section-title mt-5 fadeIn">
                  <h2 className="dark:text-white">{t("GRC_stand_for")}</h2>

                  <p className=" mb-4 dark:text-white fadeIn">
                    {t("GRC_stand_for_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="our-approach-area our-approach-area-four pb-70 mt-9">
            <div className="container">
              <div className="section-title">
                <h2 className="dark:text-white">{t("Governance")}</h2>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="approach-content">
                    <p className="dark:text-white">
                      {t("Governance_description")}
                    </p>

                    <div className="row mt-4">
                      <div className="col-lg-6 col-sm-6">
                        <div
                          className=" dark:bg-zinc-600 shadow-2xl rounded-full px-3"
                          ref={ref1}
                        >
                          <h3 className="dark:text-white text-center">
                            {t("Ethics_and_accountability")}s
                          </h3>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div
                          className=" dark:bg-zinc-600 shadow-xl rounded-full px-3"
                          ref={ref2}
                        >
                          <h3 className="dark:text-white text-center">
                            {t("Transparent_information_sharing")}
                          </h3>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div
                          className=" dark:bg-zinc-600 shadow-xl rounded-full px-3"
                          ref={ref3}
                        >
                          <h3 className="dark:text-white text-center">
                            {t("Conflict_resolution_policies")}
                          </h3>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div
                          className=" dark:bg-zinc-600 shadow-xl rounded-full px-3"
                          ref={ref4}
                        >
                          <h3 className="dark:text-white text-center">
                            {t("Resource_management")}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-column-two-area dark:bg-zinc-700">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-blog-content dark:bg-zinc-600 dark:text-white rounded-xl p-4"
                    ref={p1Ref1}
                  >
                    <span className="text-2xl text-red-600">
                      {t("Risk_management")}
                    </span>

                    <p className="mt-2">{t("Risk_management_description")}</p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 mt-5">
                  <div
                    className="single-blog-content dark:bg-zinc-600 dark:text-white rounded-xl p-4"
                    ref={p1Ref2}
                  >
                    <span className="text-2xl text-red-600">
                      {" "}
                      {t("Compliance")}:
                    </span>

                    <p className="mt-2">{t("Compliance_description")}</p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 mt-5">
                  <div
                    className="single-blog-content dark:bg-zinc-600 dark:text-white rounded-xl p-4"
                    ref={p1Ref3}
                  >
                    <span className="text-2xl text-red-600">
                      {t("Why_is_GRC_important")}
                    </span>

                    <p className="mt-2">
                      {t("Why_is_GRC_important_description")}
                    </p>
                  </div>
                </div>
                <p className="dark:text-white text-xl mt-4" ref={pRef1}>
                  {t("Benefits_of_GRC")}
                </p>
                <p className="text-red-600 text-2xl mt-4" ref={pRef2}>
                  {" "}
                  {t("Data-driven_decision-making")}
                </p>{" "}
                <p className="dark:text-white text-xl mt-2" ref={pRef3}>
                  {t("Data-driven_decision-making_description")}
                </p>{" "}
                <p className="text-red-600 text-2xl mt-4" ref={pRef4}>
                  {t("Responsible_operations")}
                </p>{" "}
                <p className="dark:text-white text-xl mt-2" ref={pRef5}>
                  {t("Responsible_operations_description")}
                </p>{" "}
                <p className="text-red-600 text-2xl mt-4" ref={pRef6}>
                  {t("Improved_cybersecurity")}
                </p>{" "}
                <p className="dark:text-white text-xl mt-2" ref={pRef7}>
                  {t("Improved_cybersecurity_description")}
                </p>
              </div>
            </div>
          </div>

          <div className="blog-column-two-area ptb-100 dark:bg-zinc-700">
            <div className="container">
              <div className="row col-lg-10 m-auto" ref={imageRef}>
                <Image
                  src="/images/services/services-Azz.jpg"
                  alt="Image"
                  width={410}
                  height={400}
                  className="w-full rounded-full"
                />
              </div>
              <div className="col-lg-12 col-md-12 mt-9">
                <div className="single-blog-posts">
                  <div className="single-blog-content dark:bg-zinc-800 rounded-3xl">
                    <p className="dark:text-white">{t("NGFW_description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-us-area pb-70  text-black ">
            <div className="container mx-auto px-4 overflow-hidden">
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                  <div className="about-img mr-auto w-fit">
                    <Image
                      src="/images/services/services-Ay.jpg"
                      alt="Image"
                      width={300}
                      height={345}
                      layout="responsive"
                      className="pt-[80px]"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 text-black">
                  <div className="about-content">
                    <div className="about-title">
                      <h2 className="text-red-600">{t("CITC_Compliance")}</h2>
                    </div>

                    <ul
                      ref={ref}
                      className="transition-opacity duration-500 ease-in-out"
                    >
                      <li
                        className={`shine-animation flex items-center mb-2 dark:text-white  ${
                          inView ? "slide-in" : "opacity-0"
                        }`}
                      >
                        {t("CITC_Compliance_description")}
                      </li>
                      <li
                        className={`shine-animation flex items-center mb-2 dark:text-white mt-5 ${
                          inView ? "slide-in" : "opacity-0"
                        }`}
                      >
                        {t("CITC_Compliance_point_1")}
                      </li>
                      <li
                        className={`shine-animation flex items-center mb-2 dark:text-white  ${
                          inView ? "slide-in" : "opacity-0"
                        }`}
                      >
                        {t("CITC_Compliance_point_2")}
                      </li>
                      <li
                        className={`shine-animation flex items-center mb-2 dark:text-white ${
                          inView ? "slide-in" : "opacity-0"
                        }`}
                      >
                        {t("CITC_Compliance_point_3")}
                      </li>
                      <li
                        className={`shine-animation flex items-center mb-2 dark:text-white mt-5 ${
                          inView ? "slide-in" : "opacity-0"
                        }`}
                      >
                        {t("CITC_Compliance_point_4")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-column-two-area  dark:bg-zinc-700 mt-[90px]">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="single-blog-posts">
                    <div className="single-blog-content dark:bg-zinc-700 rounded-xl">
                      <div className="about-title">
                        <h3 className="text-red-600 text-2xl">
                          {t("NCA_ECC_Compliance")}:
                        </h3>
                      </div>
                      <p className="dark:text-white">
                        {t("NCA_ECC_Compliance_description")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Image
                    src="/images/services/services-Ax.jpg"
                    alt="Image"
                    width={510}
                    height={400}
                  />
                </div>
                <div className="col-lg-4 col-md-4 mt-6">
                  <div className="single-blog-posts">
                    <div className="single-blog-content dark:bg-zinc-800 rounded-xl">
                      <h2 className="text-xl mb-2 dark:text-white">
                        {t("MainDomain")}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-6">
                  <div className="single-blog-posts">
                    <div className="single-blog-content dark:bg-zinc-800 rounded-xl">
                      <h2 className="text-xl mb-2 dark:text-white">
                        {t("SubDomain")}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-6">
                  <div className="single-blog-posts">
                    <div className="single-blog-content dark:bg-zinc-800 rounded-xl">
                      <h2 className="text-xl mb-2 dark:text-white">
                        {t("CyberControls")}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 mt-6">
                  <div className="single-blog-posts">
                    <div className="single-blog-content dark:bg-zinc-800 rounded-xl">
                      <p className="dark:text-white">{t("ControlsOutlined")}</p>
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

export default Governance;
