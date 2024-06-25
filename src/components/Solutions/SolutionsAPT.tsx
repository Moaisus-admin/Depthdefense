"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SolutionsAPT: React.FC = () => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

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
      <div className="blog-column-two-area pt-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4"
              ref={imageRef}
            >
              <Image
                src="/images/solutions/APT.jpg"
                alt="Image"
                width={550}
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
                    An Advanced Persistent Threat (APT) is a targeted cyber
                    attack that is designed to gain unauthorized access to
                    sensitive information or systems for an extended period of
                    time. APT attacks are typically carried out by skilled and
                    well-funded attackers who use multiple attack vectors,
                    including social engineering, malware, and exploit kits, to
                    bypass traditional security measures and gain access. Once
                    inside the system, the attackers use sophisticated
                    techniques to move laterally across the network, steal data,
                    and maintain persistence, often remaining undetected for
                    months or even years. APT attacks are often associated with
                    state-sponsored groups or organized crime syndicates that
                    have the resources and motivation to launch targeted attacks
                    against specific organizations or individuals.
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

export default SolutionsAPT;
