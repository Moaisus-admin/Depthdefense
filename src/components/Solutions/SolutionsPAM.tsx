"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SolutionsPAM: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
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

    const elements = [ref1, ref2];
    elements.forEach((ref, index) => {
      gsap.set(ref.current, {
        x: index % 2 === 0 ? "-100vw" : "100vw",
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
  }, []);
  return (
    <>
      <div className="blog-column-two-area pt-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4">
              <Image
                src="/images/solutions/PAM-1.jpg"
                alt="Image"
                width={610}
                height={200}
                ref={ref1}
              />

              <Image
                src="/images/solutions/PAM-2.jpg"
                alt="Image"
                width={610}
                height={200}
                ref={ref2}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={ref}
                >
                  <p className="dark:text-white">
                    Privilege Access Management (PAM) refers to the set of
                    processes, tools, and policies designed to manage and
                    control privileged user access in an organization. PAM is
                    aimed at identifying and controlling privileged users, their
                    access levels, and privileges within a system or network.
                    This includes activities such as managing passwords,
                    restricting access to sensitive systems, enforcing user
                    accountability, and monitoring user activity. The goal of
                    PAM is to reduce the risk of data breaches and protect
                    critical assets by limiting access to only authorized users
                    who require privileged access to perform their duties.
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

export default SolutionsPAM;
