"use client";

import React from "react";
import Image from "next/image";

const OurApproach: React.FC = () => {
  return (
    <>
      <div className="our-approach-area-three pb-70 dark:bg-zinc-600">
        <div className="container">
          <div className="section-title">
            <span className="text-3xl dark:text-white">Our Approach</span>
            <h2 className="dark:text-white">
              How Can I Protect My Website From Cyber Attacks
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-key"></i>
                  </div>
                  <h3 className="dark:text-white">Identifying Threats</h3>
                  <p className="dark:text-white">
                    Proactively identify and address potential threats with
                    advanced monitoring tools to prevent cyber attacks before
                    they occur.
                  </p>
                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-padlock"></i>
                  </div>
                  <h3 className="dark:text-white">Keep Software Updated</h3>
                  <p className="dark:text-white">
                    Regularly update your software to patch vulnerabilities and
                    protect against the latest cyber threats for your safety.
                  </p>
                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-url"></i>
                  </div>
                  <h3 className="dark:text-white">Check Website URL</h3>
                  <p className="dark:text-white">
                    Ensure your website URL uses HTTPS to encrypt data and
                    safeguard user information from interception.
                  </p>
                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-approach-box overly-one dark:bg-zinc-700">
                <div className="overly-two">
                  <div className="icon">
                    <i className="flaticon-antivirus"></i>
                  </div>
                  <h3 className="dark:text-white">Use Antivirus Software</h3>
                  <p className="dark:text-white">
                    Deploy robust antivirus software to detect and eliminate
                    malicious threats, ensuring your website's security.
                  </p>
                  <div className="approach-shape">
                    <Image
                      src="/images/approach-shape.png"
                      alt="Image"
                      width={153}
                      height={153}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="approach-right-shape shape-three">
          <Image
            src="/images/cyberr.png"
            alt="Image"
            width={210}
            height={162}
          />
        </div>
      </div>
    </>
  );
};

export default OurApproach;
