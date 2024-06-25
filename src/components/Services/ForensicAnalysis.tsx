"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ForensicAnalysis: React.FC = () => {
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
      <div className="about-us-area ptb-50 dark:bg-zinc-700">
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
                          Forensic analysis definition can be described as a
                          detailed process of detecting, investigating, and
                          documenting the reason, course, and consequences of a
                          security incident or violation against state and
                          organization laws. Forensic analysis is often used for
                          providing evidence in court hearings, especially in
                          criminal investigations. It employs wide range of
                          investigative procedures and technologies.
                        </p>

                        <p className="mt-4 dark:text-white">
                          By tracking digital activity, investigators can relate
                          digital information to physical evidence. Digital
                          forensics can also allow investigators to discover
                          planned attacks and prevent a crime from occurring.
                          There are five critical forensic analysis components
                          involved in conducting a detailed forensic analysis,
                          all of which are involved in contributing towards a
                          successful investigation.
                        </p>

                        <ul className="text-red-700">
                          <li>
                            <i className="bx bx-check-circle"></i>
                            Developing Policy and Procedures
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            Assess the Evidence
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            Acquire Evidence
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            Examining the Evidence
                          </li>
                          <li>
                            <i className="bx bx-check-circle mt-2"></i>
                            Documenting and Reporting
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
