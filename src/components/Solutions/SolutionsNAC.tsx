"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SolutionsNAC: React.FC = () => {
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
      <div className="blog-column-two-area pt-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4">
              <div ref={imgRef}>
                <Image
                  src="/images/solutions/NAC.jpg"
                  alt="Image"
                  width={910}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={ref}
                >
                  <p className="dark:text-white">
                    Network Access Control (NAC) is a security solution that
                    helps organizations control access to their network. NAC
                    solutions use various techniques to authenticate and
                    authorize users and devices that connect to a network,
                    ensuring that only authorized parties are granted access.
                    This can include methods such as checking the user’s
                    credentials, assessing the health and compliance of
                    connected devices, and requiring the installation of
                    security software before allowing access. NAC solutions can
                    help prevent unauthorized or malicious access to a network
                    and reduce the risk of security breaches.
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

export default SolutionsNAC;
