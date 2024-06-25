"use client";

import React from "react";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <>
      <div className="feature-area feature-area-three pb-70 dark:bg-zinc-600">
        <div className="container">
          <div className="row">
            <h2 className="text-center dark:text-white">
              Strengthen Your Organizations Cybersecurity with Our Professional
              Services
            </h2>
            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one dark:text-white dark:bg-zinc-700 rounded-2xl">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-testing"></i>
                    <h3 className="dark:text-white">SOC/IR Service</h3>
                  </div>
                  <p>
                    Benefit from our Security Operations Center (SOC) and
                    Incident Response (IR) services to monitor, detect, and
                    respond to cyber threats in real-time.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape-2.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-feature overly-one dark:text-white dark:bg-zinc-700 rounded-2xl">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cybercrime"></i>
                    <h3 className="dark:text-white">VAPT</h3>
                  </div>
                  <p>
                    Strengthen your defenses with our Vulnerability Assessment
                    and Penetration Testing (VAPT) services, identifying and
                    mitigating security weaknesses before they can be exploited.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape-2.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-feature overly-one dark:text-white dark:bg-zinc-700 rounded-2xl">
                <div className="overly-two">
                  <div className="title">
                    <i className="flaticon-cyber-security"></i>
                    <h3 className="dark:text-white">Risk Management</h3>
                  </div>
                  <p>
                    Implement comprehensive risk management strategies with our
                    expert guidance, ensuring your organization is prepared to
                    handle potential cybersecurity threats effectively.
                  </p>
                  <div className="feature-shape">
                    <Image
                      src="/images/feature-shape-2.png"
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
