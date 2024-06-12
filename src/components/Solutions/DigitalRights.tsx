"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SolutionsDigitalRights: React.FC = () => {
  const imageRef = useRef(null);
  const cardRef = useRef(null);

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
      <div className="blog-column-two-area pt-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4"
              ref={imageRef}
            >
              <Image
                src="/images/solutions/DR.jpg"
                alt="Image"
                width={910}
                height={300}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
                  ref={cardRef}
                >
                  <p className="dark:text-white">
                    Digital Rights Management (DRM) refers to the techniques and
                    technologies used to control access and usage of digital
                    content and software. It is a system that is typically
                    implemented by content creators and publishers to protect
                    their intellectual property from unauthorized reproduction,
                    distribution, or copying. DRM may involve encrypting digital
                    media, controlling access through digital keys, or limiting
                    the number of devices that can access the content or
                    software. It enables copyright holders to safeguard their
                    rights and ensure that they receive payment for their works.
                    However, DRM has also been criticized for potentially
                    restricting user rights, making it difficult to use legally
                    purchased content across different devices, and hindering
                    innovation.
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

export default SolutionsDigitalRights;
