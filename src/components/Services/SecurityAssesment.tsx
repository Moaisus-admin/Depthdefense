"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecurituyAssesment: React.FC = () => {
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
      <div className="blog-column-two-area pt-100 dark:bg-zinc-800">
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
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
                  ref={p1Ref}
                >
                  <p className="dark:text-white">
                    Application security assessment is the process of testing
                    applications to find threats and determining the measures to
                    put in place to defend against them. Through the assessment
                    process, organizations can evaluate the current security
                    posture of their applications and determine the next steps
                    for further protecting their software from future exploits.
                    Most organizations conduct application security assessments
                    on a regular basis to ensure their security measures are
                    up-to-date and effective.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 ml-auto">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
                  ref={p2Ref}
                >
                  <p className="dark:text-white">
                    A thorough application security assessment can enable
                    organizations to identify potential threats to their
                    software and applications before they become a problem.
                    Security incidents are a substantial risk for today’s
                    software-driven business environment because they can have a
                    negative impact on the company’s reputation and revenue. In
                    many industries, application security assessments may even
                    be required to comply with cybersecurity laws and
                    regulations. For example, the PCI standards suggest
                    adherence to OWASP Top 10 guidelines.
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
