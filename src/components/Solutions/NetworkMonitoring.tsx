"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SolutionsNetWorkM: React.FC = () => {
  const imageRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 20, // Move the image 20px up
      duration: 1, // The animation should last 1 second
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation on alternate iterations
      ease: "power1.inOut", // Use a smooth easing function
    });

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
                src="/images/solutions/NM.jpg"
                alt="Image"
                width={810}
                height={300}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
                  ref={ref}
                >
                  <p className="dark:text-white">
                    Lorem ipsum dolor sit amet consectetur. Purus facilisis
                    ultrices viverra malesuada tellus bibendum tortor felis.
                    Pellentesque mattis massa faucibus in arcu in eget et.
                    Turpis vel nunc venenatis dui. Risus enim fermentum ornare
                    nec in volutpat vestibulum neque nunc. In quis pharetra ac
                    phasellus commodo viverra tincidunt aenean. Vehicula
                    pulvinar quam magna in egestas amet purus pretium ipsum. Est
                    curabitur integer non nibh ante neque euismod. Purus mi Odio
                    enim termentum sollicitudin. Lorem ipsum dolor sit amet
                    consectetur. Purus facilisis ultrices viverra malesuada
                    tellus bibendum tortor felis.lorem ipsum dolor sit amet
                    consectetur. Purus facilisis ultrices viverra malesuada
                    tellus bibendum tortor felis. Pellentesque mattis massa
                    faucibus in arcu in eget et. Turpis vel nunc venenatis dui.
                    Risus enim fermentum ornare nec in volutpat vestibulum neque
                    nunc. In quis pharetra ac phasellus commodo viverra
                    tincidunt aenean.
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

export default SolutionsNetWorkM;
