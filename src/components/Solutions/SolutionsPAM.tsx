"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SolutionsPAM: React.FC = () => {
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      imgRef.current,
      { scale: 0.8, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 2,
        ease: "bounce",
      }
    ).to(
      imgRef.current,
      {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      },
      "+=2"
    );
  }, []);
  return (
    <>
      <div className="blog-column-two-area pt-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4">
              <Image
                src="/images/solutions/PAM-1.jpg"
                alt="Image"
                width={610}
                height={200}
              />

              <Image
                src="/images/solutions/PAM-2.jpg"
                alt="Image"
                width={610}
                height={200}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
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
