"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SolutionsIdentityManagement: React.FC = () => {
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
            <div className="col-lg-12 col-md-12 justify-center flex">
              <div ref={imgRef}>
                <Image
                  src="/images/solutions/solution-5.jpg"
                  alt="Image"
                  width={810}
                  height={200}
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
                  ref={ref}
                >
                  <p className="dark:text-white">
                    Identity and Access Management (IAM) is a framework for
                    managing and controlling access to resources within an
                    organization. It involves managing the identities of users,
                    devices, and other entities that interact with an
                    organization’s systems, applications, and data.
                  </p>
                  <p className="dark:text-white">
                    IAM solutions provide centralized control over user access
                    to resources, and allow administrators to manage
                    authentication, authorization, and access control policies.
                    They enable organizations to enforce security policies,
                    maintain compliance, and reduce the risk of data breaches or
                    unauthorized access to sensitive resources.
                  </p>
                  <p className="dark:text-white">
                    IAM solutions typically include features such as user
                    provisioning, single sign-on (SSO), multi-factor
                    authentication (MFA), directory services, and identity
                    governance and administration (IGA), among others.
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

export default SolutionsIdentityManagement;
