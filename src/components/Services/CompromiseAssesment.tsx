"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompromiseAssesment: React.FC = () => {
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
      <div className="blog-column-two-area dark:bg-zinc-800">
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
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
                  ref={p1Ref}
                >
                  <p className="dark:text-white">
                    Compromise assessments are high-level investigations where
                    skilled teams utilize advanced tools to dig more deeply into
                    their environment to identify ongoing or past attacker
                    activity in addition to identifying existing weaknesses in
                    controls and practices. The intent of the comprehensive
                    assessment is to answer the critical question: “Has my
                    organization been breached?”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row w-full m-auto">
            <div className="solution-title">
              <h2 className="dark:text-white NumberLogoTitle">
                Benefits of using a vCISO include:
              </h2>
            </div>

            <div className="col-md-12">
              <div
                className="single-solution  dark:bg-zinc-900 dark:text-white main-point"
                ref={cardRef1}
              >
                <div className="overly-two">
                  <h3 className="dark:text-white"></h3>
                  <p className="mt-5">
                    Despite advancements in cybersecurity technologies and
                    increases in security budgets, average dwell times have
                    remained largely unchanged over the years. Dwell time is the
                    amount of time between an attacker’s entry into the network
                    and their expulsion. Reducing dwell time is important
                    because the longer a threat actor can operate undetected
                    inside the network, the more time they have to find a route
                    to the most valuable assets, learn how to defeat defenses,
                    install back doors, and exfiltrate data. These advanced
                    persistent threats (APTs) are damaging and costly, but they
                    can be exposed by a compromise assessment.
                  </p>
                  <span className="NumberLogo">01</span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="single-solution dark:bg-zinc-900 dark:text-white main-point"
                ref={cardRef2}
              >
                <div className="overly-two">
                  <h3 className="dark:text-white"></h3>
                  <p className="mt-5">
                    The depth and breadth of a compromise assessment allows
                    organizations to determine if threat actors are present or
                    if they have been breached. This determination derived
                    through comprehensive analysis leads to a reduction in
                    security risk of attackers stealing financial assets,
                    customer data or intellectual property.
                  </p>
                  <span className="NumberLogo">02</span>
                </div>
              </div>
            </div>

            <div className="col-md-12 ">
              <div
                className="single-solution dark:bg-zinc-900 dark:text-white main-point"
                ref={cardRef3}
              >
                <div className="overly-two">
                  <h3 className="dark:text-white"></h3>
                  <p className="mt-5">
                    Security posture is improved through the proactive
                    identification of ineffective security practices such as
                    configuration errors and policy conflicts that can leave
                    gaps and put organizations at greater risk. A compromise
                    assessment will expose these weaknesses and provide a path
                    toward remediating them. Organizations will be able to
                    answer the question, “has my organization been breached?” It
                    will also provide suggestions for future improvements that
                    can be used to guide decisions about budget and resources in
                    the future. Lastly, compromise assessments are mandatory
                    under some regulations, but even if an organization is not
                    covered by one of those particular standards, proof of a
                    compromise assessment will carry weight with auditors.
                  </p>
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
