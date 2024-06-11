"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ISO: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="about-us-area pb-70  text-black  dark:bg-zinc-900">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex flex-wrap items-center">
          <span className="dark:text-white mt-11">
            ISO27001 is an international standard that is used to manage and
            ensure the security of information assets in an organization. The
            standard provides a framework for implementing a robust information
            security management system (ISMS) that includes policies,
            procedures, and controls designed to protect the confidentiality,
            integrity, and availability of information.
          </span>
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="about-img mr-auto w-fit">
              <Image
                src="/images/services/services-An.jpg"
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
                  Benefits of ISO27001 include:
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
                  Enhanced information security: The standard provides a
                  comprehensive framework to manage information security and
                  protect information assets against a range of threats.
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Regulatory compliance: Implementation of ISO 27001 helps
                  organizations comply with various regulatory requirements
                  related to information security such as NCA, CITC,CCC,SAMA
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Improved business reputation: Demonstration of adherence to
                  the standard helps organizations gain the trust of customers,
                  stakeholders, and partners.
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Risk management: Implementation of risk management processes
                  in line with ISO27001 helps organizations identify and
                  mitigate potential security risks proactively
                </li>
                <li
                  className={`shine-animation flex items-center mb-4 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  Competitive advantage: Achieving certification to the standard
                  can provide a competitive edge in the market, demonstrating a
                  commitment to information security to clients, partners, and
                  other stakeholders.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISO;
