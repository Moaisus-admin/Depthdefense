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
        className="feature-area feature-area-two feature-area-five pt-100 pb-[100px] dark:bg-zinc-800 w-full"
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
                  typeSpeed={30}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6" ref={addToRefs}>
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3>SOC/IR Service</h3>
                  </div>

                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6" ref={addToRefs}>
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3>VAPT</h3>
                  </div>

                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6" ref={addToRefs}>
              <div className="single-feature overly-one">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3>Risk Management</h3>
                  </div>

                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
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
