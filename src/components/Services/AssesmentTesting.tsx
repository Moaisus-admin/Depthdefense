"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AssesmentTesting: React.FC = () => {
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
      <div className="blog-column-two-area pt-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row">
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
                  <p className="dark:text-white">
                    In the age of “Internet of Things”, we see a proliferation
                    of evolving cyber-attacks targeting organizations and
                    businesses. Cyber-attacks might be intangible, but their
                    impacts are acutely felt: there is a growing risk of
                    disruption, information loss, reputation damage and material
                    cost to clients of different fields. The Vulnerability
                    Assessment (VA) services provided by Depth Defense allow
                    clients to have better knowledge of their vulnerabilities
                    and how these could be addressed. To take things to the next
                    level, Depth Defense’s accredited cybersecurity consultant
                    can conduct a Penetration Test (PT) which demonstrate how
                    these vulnerabilities could be exploited against the
                    interest of clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={cardRef2}
                >
                  <p className="dark:text-white">
                    The VA and PT represent the first step and the next in the
                    journey of cybersecurity. Clients can enjoy affordable
                    services from Depth Defense and better safeguard their
                    businesses against loopholes and potential attacks. With a
                    comprehensive VA report produced by our consultants, clients
                    are well-informed of the current status of their information
                    security and can respond by forming corresponding policies.
                    PT, as an extension of VA, demonstrates the exploitability
                    of the clients by attacking their system in a synthetic
                    environment. Clients can experience the
                    “worst-case-scenario” without the incurrence of actual
                    damages.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={cardRef3}
                >
                  <p className="dark:text-white">
                    By utilizing a set of intrusion testing tools and manual
                    exploitation techniques, an experienced team of Depth
                    Defense experts will perform a deep analysis of clients’
                    information networks to determine the extent of their
                    vulnerabilities, which will be categorized against a
                    criteria of Criticality, Exploitability, Impact and
                    Probability to establish underlying risk levels. These
                    vulnerabilities will be exploited by our consultant in the
                    synthetic environment. The details of the discovered issues
                    are documented in the report to help illustrate the current
                    state of their IT security posture.
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

export default AssesmentTesting;
