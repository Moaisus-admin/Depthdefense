"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const VCISO: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="about-us-area pb-70  text-black  dark:bg-zinc-900">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="dark:text-white mt-11">
          <Typewriter
            words={[
              "A vCISO (Virtual Chief Information Security Officer) is a contracted service that provides an organization with the expertise and guidance of a highly skilled and experienced CISO, but on a part-time or as-needed basis rather than a full-time employee. This allows smaller organizations without the ability to afford a full-time CISO to have access to a high-level cybersecurity professional.",
            ]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={10}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="about-img mr-auto w-fit">
              <Image
                src="/images/services/services-Al.jpg"
                alt="Image"
                width={300}
                height={345}
                layout="responsive"
                className="pt-[80px]"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-black">
            <div className="about-content">
              <div className="about-title">
                <h2 className="dark:text-white">
                  Benefits of using a vCISO include:
                </h2>
              </div>

              <ul
                ref={ref}
                className="transition-opacity duration-500 ease-in-out"
              >
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Cost-effective: Organizations can save money by only paying
                  for a vCISO's services when they require them, rather than
                  hiring a full-time CISO.
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Expertise: vCISOs are highly skilled and experienced
                  cybersecurity professionals who can provide expert guidance
                  and recommendations tailored to an organization's specific
                  needs.
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Flexibility: A vCISO's availability can be tailored to an
                  organization's needs, with the ability to scale up or down as
                  required.
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Objective perspective: As a third-party, the vCISO can offer
                  an objective perspective on an organization's security posture
                  and make recommendations without any bias.
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Risk mitigation: A vCISO can help identify and prioritize
                  risks, develop strategies to mitigate them, and regularly
                  monitor and assess an organization's security posture to
                  ensure ongoing risk reduction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCISO;
