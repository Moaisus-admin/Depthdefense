"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const AboutUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="about-us-area pb-70  text-black  dark:bg-zinc-900">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="about-img mr-auto w-fit">
              <Image
                src="/images/Lock.jpg"
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
                <span className="text-2xl">What We Do</span>
                <h2 className="dark:text-white">
                  The Perfect Solution For all Protection
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                  END POINT SECURITY
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                  SECURITY MONITORING
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                  NETWORK SECURITY/SOLUTION
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                  ACCESS CONTROL
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                  WEB APPLICATION SECURITY
                </li>
                <li
                  className={`shine-animation flex items-center mb-2 dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                  MDM
                </li>
                <li
                  className={`shine-animation flex items-center mb-2  dark:text-white  ${
                    inView ? "slide-in" : "opacity-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="red"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                  MALWARE ANALYSIS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
