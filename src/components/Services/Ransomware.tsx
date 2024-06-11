"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Ransomware: React.FC = () => {
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scaleX: 0 }, // Start with no width
      {
        duration: 3, // Make the animation slower for the image
        opacity: 1, // End with full visibility
        scaleX: 1, // End with full width
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center", // when the top of the trigger hits the center of the viewport
          end: "bottom center", // end after scrolling 500px beyond the start
          toggleActions: "play none none none", // don't reverse the animation
        },
      }
    );

    gsap.fromTo(
      cardRef.current,
      { rotationY: 90, autoAlpha: 0, transformOrigin: "left center" }, // Start rotated 90 degrees around the left center
      {
        duration: 1, // Make the animation last 1 second
        rotationY: 0, // End at the final position
        autoAlpha: 1, // End fully visible
        ease: "power1.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top center", // when the top of the trigger hits the center of the viewport
          toggleActions: "play none none none", // don't reverse the animation
        },
      }
    );
  }, []);

  return (
    <>
      <div className="blog-column-two-area ptb-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div className="single-blog-posts">
                <div ref={imageRef}>
                  <Image
                    src="/images/services/services-Ad.jpg"
                    alt="Image"
                    width={810}
                    height={500}
                  />
                </div>

                <div
                  ref={cardRef}
                  className="single-blog-content dark:bg-zinc-700 dark:text-white rounded-xl"
                >
                  <span className="text-2xl">Ransomware:</span>

                  <p>
                    Ransomware preparedness assessment aims to identify where
                    your defenses are strong and where vulnerabilities exist
                    that ransomware actors can exploit. Our methodology focuses
                    on the cyber kill chain, a comprehensive examination that
                    includes remote access configuration, phishing prevention,
                    email and web protections, access controls and endpoint
                    monitoring and end user awareness. At the end of our
                    assessment, we will provide you with a prioritized,
                    customized set of recommendations to help your organization
                    deflect, detect or respond to a ransomware attack.
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

export default Ransomware;
