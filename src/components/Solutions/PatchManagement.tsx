"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SolutionsPatch: React.FC = () => {
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
      <div className="blog-column-two-area pt-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4"
              ref={imageRef}
            >
              <Image
                src="/images/solutions/Patch.jpg"
                alt="Image"
                width={510}
                height={300}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={cardRef}
                >
                  <p className="dark:text-white">
                    Patch management is the process of identifying, acquiring,
                    testing, and installing software updates (patches) to
                    address security vulnerabilities, performance issues, and
                    other bugs in operating systems, applications, and firmware.
                    Patch management helps to maintain the security, stability,
                    and reliability of computer systems and networks by ensuring
                    that all software components are up-to-date with the latest
                    patches released by vendors. This can include both operating
                    system patches as well as patches for individual
                    applications. Effective patch management requires proper
                    planning, testing, and change control procedures to minimize
                    risks to the organization.
                  </p>
                  <p className="dark:text-white">
                    Vulnerability management is the process of identifying,
                    evaluating, prioritizing, and mitigating security
                    vulnerabilities in an organization’s IT infrastructure. This
                    includes finding vulnerabilities in software, hardware, and
                    configuration settings that could be exploited by cyber
                    attackers to breach an organization’s security.
                    Vulnerability management also involves implementing
                    effective and timely responses to identified
                    vulnerabilities, including patching, updating software, and
                    applying security measures to prevent exploitation. The goal
                    of vulnerability management is to minimize risk to the
                    organization by reducing the potential for successful cyber
                    attacks
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

export default SolutionsPatch;
