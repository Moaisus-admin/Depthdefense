"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";

const Features: React.FC = () => {
  const [startTyping, setStartTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLElement | null)[]>([]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect(); // Stop observing after the animation starts
          // GSAP animations
          gsap.from(featureRefs.current, {
            autoAlpha: 0,
            scale: 0.5,
            rotation: 90,
            stagger: 1,
            ease: "power3.out",
            duration: 3,
          });
        }
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <>
      <div
        className="feature-area feature-area-two feature-area-five pt-100 pb-[100px] bg-slate-50 dark:bg-zinc-800"
        ref={sectionRef}
      >
        <div className="container">
          <div className="section-title w-full">
            <span className="text-2xl text-[#e21f36]">Services</span>
            <h3 className="text-3xl dark:text-white font-poppins">
              {startTyping && (
                <Typewriter
                  words={[
                    "You Can Protect Your Organization's Cybersecurity By Services Us",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle=""
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6" ref={addToRefs}>
              <div
                className="single-feature overly-one rounded-3xl feature-card"
                id="feature-container"
              >
                <div className="overly-two round">
                  <div className="title justify-center flex">
                    <Image
                      src="/images/Service-3.jpg"
                      alt="Image"
                      width={119}
                      height={119}
                      className="items-center"
                    />
                  </div>
                  <p className="text-center">SOC/IR Service</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 " ref={addToRefs}>
              <div
                className="single-feature overly-one rounded-3xl feature-card"
                id="feature-container"
              >
                <div className="overly-two">
                  <div className="title justify-center flex">
                    <Image
                      src="/images/Service-2.jpg"
                      alt="Image"
                      width={119}
                      height={119}
                      className="items-center"
                    />
                  </div>
                  <p className="text-center">VAPT</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0"
              ref={addToRefs}
            >
              <div
                className="single-feature overly-one rounded-3xl feature-card"
                id="feature-container"
              >
                <div className="overly-two">
                  <div className="title justify-center flex">
                    <Image
                      src="/images/Service-1.jpg"
                      alt="Image"
                      width={119}
                      height={119}
                      className="items-center"
                    />
                  </div>
                  <p className="text-center">Risk Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
