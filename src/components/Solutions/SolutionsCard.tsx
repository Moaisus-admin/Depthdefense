"use client";
import { useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import gsap from "gsap";

interface WordElement extends HTMLSpanElement {}

const SIEMCard: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 20, // Move the image 20px up
      duration: 1, // The animation should last 1 second
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation on alternate iterations
      ease: "power1.inOut", // Use a smooth easing function
    });
    if (textRef.current) {
      const words = textRef.current!.querySelectorAll(
        "span"
      ) as NodeListOf<WordElement>;
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

      for (let i = 0; i < words.length; i++) {
        // Calculate random y-offset for stronger ground popping effect
        const randomYOffset = Math.random() * 40 - 20; // Range: -20 to +20 pixels

        tl.fromTo(
          words[i],
          {
            opacity: 0,
            transform: `translateY(${randomYOffset}px)`, // Initial y-offset
          },
          {
            opacity: 1,
            transform: "translateY(0px)",
            duration: 0.1,

            // Increased bounce strength and number of overshoots
            ease: "bounce.out(5)",
          }
        );
      }
    }
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".main-point", {
      scale: 0.95,
      duration: 2,
      yoyo: true,
      repeat: -1,
    }).to(".main-point", { scale: 1, duration: 2, yoyo: true, repeat: -1 });
  }, []);
  return (
    <>
      <div className="solution-area pt-[50px] pb-70 w-full dark:bg-zinc-700  dark:text-white text-black">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-lg-6 w-full  ">
              <div className="solution-content">
                <div className="solution-title col-lg-12 flex justify-center">
                  <div className=" ml-auto col-lg-6 text-xl">
                    <div className="">
                      <h2 className=" dark:text-white">SIEM</h2>
                    </div>
                    <div
                      className="dark:text-white flex flex-wrap gap-1"
                      ref={textRef}
                    >
                      <span>SIEM</span> <span>stands</span> <span>for</span>{" "}
                      <span>Security</span> <span>Information</span>{" "}
                      <span>and</span> <span>Event</span>{" "}
                      <span>Management.</span>
                      <span>It</span> <span>is</span> <span>a</span>{" "}
                      <span>software</span> <span>solution</span>{" "}
                      <span>that</span> <span>helps</span>{" "}
                      <span>organizations</span> <span>to</span>{" "}
                      <span>detect,</span> <span>analyze,</span>{" "}
                      <span>and</span> <span>respond</span> <span>to</span>{" "}
                      <span>cybersecurity</span> <span>threats.</span>
                      <span>The</span> <span>SIEM</span> <span>system</span>{" "}
                      <span>accomplishes</span> <span>this</span>{" "}
                      <span>by</span> <span>aggregating</span> <span>and</span>{" "}
                      <span>correlating</span> <span>data</span>{" "}
                      <span>from</span> <span>various</span>{" "}
                      <span>sources,</span> <span>such</span>
                      <span>as</span> <span>network</span> <span>devices,</span>{" "}
                      <span>servers,</span> <span>and</span>{" "}
                      <span>applications,</span> <span>to</span>{" "}
                      <span>identify</span> <span>potential</span>{" "}
                      <span>security</span> <span>incidents.</span>
                    </div>
                  </div>
                  <div className="col-lg-6 pt-4 w-fit m-auto">
                    <div className="solution-img w-fit" ref={imageRef}>
                      <Image
                        src="/images/solutions/solutions-2.jpg"
                        alt="Image"
                        width={400}
                        height={200}
                        className="main-image"
                      />
                    </div>
                  </div>
                </div>

                <div className="row w-full m-auto">
                  <div className="solution-title">
                    <h2 className="dark:text-white NumberLogoTitle">
                      Benefits of using a vCISO include:
                    </h2>
                  </div>
                  <div className="col-lg-12 ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-solution overly-one dark:bg-zinc-800 dark:text-white main-point">
                          <div className="overly-two">
                            <h3 className="dark:text-white">
                              Enhanced threat detection:
                            </h3>
                            <p>
                              SIEM helps to detect potential security incidents
                              by analyzing and correlating data from various
                              sources, providing an early warning of potential
                              attacks.
                            </p>
                            <span className="NumberLogo">01</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-solution overly-one dark:bg-zinc-800 dark:text-white main-point">
                          <div className="overly-two">
                            <h3 className="dark:text-white">
                              Improved incident response:
                            </h3>
                            <p>
                              SIEM can help organizations to respond more
                              quickly and effectively to security incidents by
                              automating incident response processes.
                            </p>
                            <span className="NumberLogo">02</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-6 ">
                        <div className="single-solution overly-one dark:bg-zinc-800 dark:text-white main-point">
                          <div className="overly-two">
                            <h3 className="dark:text-white">Compliance:</h3>
                            <p>
                              SIEM can help organizations to comply with
                              regulatory requirements by providing them with a
                              centralized platform to collect, store, and
                              analyze security logs.
                            </p>
                            <span className="NumberLogo">03</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-solution overly-one dark:bg-zinc-800 dark:text-white main-point">
                          <div className="overly-two">
                            <h3 className="dark:text-white">
                              Increased efficiency:
                            </h3>
                            <p>
                              SIEM reduces the number of false positives that
                              security teams need to investigate, allowing them
                              to focus their resources on real security
                              incidents.
                            </p>
                            <span className="NumberLogo">04</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 w-full">
                    <div className="single-solution overly-one dark:bg-zinc-800 dark:text-white main-point">
                      <div className="overly-two">
                        <h3 className="dark:text-white">Cost-effective: </h3>
                        <p>
                          SIEM systems can help organizations to reduce overall
                          security-related costs by providing a centralized
                          platform for security monitoring and management,
                          reducing the need for multiple security tools.
                        </p>
                        <span className="NumberLogo">05</span>
                      </div>
                    </div>
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

export default SIEMCard;
