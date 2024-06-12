"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RiskAssesment: React.FC = () => {
  const p1Ref = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      p1Ref.current,
      { x: 300, autoAlpha: 0 }, // starting state
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

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scaleX: 0 }, // Start with no width
      {
        duration: 1, // Make the animation slower for the image
        opacity: 1, // End with full visibility
        scaleX: 1, // End with full width
        ease: "power1.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top center", // when the top of the trigger hits the center of the viewport
          end: "bottom center", // end after scrolling 500px beyond the start
          toggleActions: "play none none none", // don't reverse the animation
        },
      }
    );
  }, []);

  return (
    <>
      <div className="blog-column-two-area  dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" ref={imageRef}>
              <Image
                src="/images/services/services-Ag.jpg"
                alt="Image"
                width={510}
                height={400}
              />
            </div>
            <div className="col-lg-6 col-md-12 mt-[100px]">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
                  ref={p1Ref}
                >
                  <p className="dark:text-white">
                    IT security risk assessments focus on identifying the
                    threats facing your information systems, networks and data,
                    and assessing the potential consequences you’d face should
                    these adverse events occur. Risk assessments should be
                    conducted on a regular basis (e.g. annually) and whenever
                    major changes occur within your organization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 mt-6">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
                  ref={cardRef}
                >
                  <h2 className="text-2xl mb-2 dark:text-white">Red Teaming</h2>
                  <p className="dark:text-white">
                    Red Teaming is a security discipline originating in the
                    military arena that simulates full-spectrum cyber-attacks.
                    This allows you to measure your cyber defense’s
                    effectiveness against malicious actors and allows your
                    defenders to practice their detection and response
                    capabilities in a controlled environment and validate or
                    refine them. Lastly, the Red Team can also expose gaps in
                    your overall security defense capabilities by targeting your
                    organization and not being confined by the constraints of a
                    regular penetration test.
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

export default RiskAssesment;
