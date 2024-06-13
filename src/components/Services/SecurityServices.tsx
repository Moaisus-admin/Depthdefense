"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const SecurityServices: React.FC = () => {
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
              "Managed Security Services (MSS) refer to outsourcing security tasks and duties to third-party service providers. These services aim to enhance an organization’s security posture by providing advanced security measures, threat detection, and response capabilities.",
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
                src="/images/services/services-Am.jpg"
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
                <h2 className="dark:text-white mt-[50px]">
                  The benefits of Managed Security Services for organizations
                  include:
                </h2>
              </div>

              <ul
                ref={ref}
                className="transition-opacity duration-500 ease-in-out"
              >
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Proactive Threat Detection: MSS providers use specialized
                  tools and techniques to continuously monitor an organization's
                  systems, networks, and applications for potential security
                  threats.
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Reduced Security Risk: Managed Security Services provide a
                  holistic approach to security and help organizations mitigate
                  risks associated with cybersecurity breaches.
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Cost-Effective: MSS reduces the need for in-house security
                  teams and infrastructure, which in turn reduces the overall
                  cost of maintaining a robust security posture.
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Expertise: Managed Security Services providers have
                  experienced security personnel who possess extensive knowledge
                  and skills required to handle complex security issues.
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Compliance and Regulations: MSS providers ensure that
                  organizations comply with industry standards and regulations.
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  24x7x365 Support: MSS providers offer round-the-clock support
                  to their clients and provide immediate response to prevent or
                  mitigate security incidents.
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Business Continuity: MSS providers offer business continuity
                  services that enable organizations to resume their operations
                  in the event of security incidents or disasters.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityServices;
