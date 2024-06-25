"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SolutionsBreachAttack: React.FC = () => {
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
      { opacity: 0, scaleY: 0 }, // Start with no width
      {
        duration: 2, // Make the animation slower for the image
        opacity: 1, // End with full visibility
        scaleY: 1, // End with full width
        ease: "power1.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom", // when the top of the trigger hits the center of the viewport
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
                src="/images/solutions/BAS.jpg"
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

export default SolutionsBreachAttack;
